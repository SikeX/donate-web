import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { donationItemState } from '../state/state'
import { FILE_BASE_URL } from '../services/api'
import TabPanel from './UI/TabPanel'
import StatusBar from './StatusBar'
import donationItem from '../services/donationItem'
import DonationRecord from './DonationRecord'

function Item({ name }) {
  return <div className="px-4 py-3 hover:bg-gray-400 cursor-pointer text-xl font-bold">{name}</div>
}

function Option({ id, name, money, getOptionMoney }) {
  // const isChecked = name

  return (
    <div className="donation-option">
      <input
        type="radio"
        name="option"
        id={name}
        value={money}
        onChange={(e) => getOptionMoney(e, id, name)}
        className="sr-only"
      />
      {name === '任意捐' ? (
        <label
          className="cursor-pointer px-2 py-1 border-2 hover:border-blue-500 hover:text-blue-500 focus:text-blue-500 rounded-md"
          htmlFor={name}
        >
          {name}
        </label>
      ) : (
        <label
          className="cursor-pointer px-2 py-1 border-2 hover:border-blue-500 hover:text-blue-500 focus:text-blue-500 rounded-md"
          htmlFor={name}
        >
          {`${name}(${money}元)`}
        </label>
      )}
    </div>
  )
}

function Donate({ option, leastMoney }) {
  const [optionId, setOptionId] = useState('1')

  const [money, setMoney] = useState()

  const [totalMoney, setTotalMoney] = useState()

  const [itemDetail, setItemDetail] = useRecoilState(donationItemState)

  let history = useHistory()

  const getOptionMoney = (e, id, tag) => {
    console.log(e.target.value)
    // eslint-disable-next-line no-unused-expressions
    tag === '任意捐' ? setOptionId('1') : setOptionId(id)
    setMoney(e.target.value)
  }

  const handleMoneyChange = (e) => {
    setTotalMoney(optionId === '1' ? parseFloat(e.target.value) : parseFloat(e.target.value))
  }

  const submitDonation = () => {
    console.log(totalMoney)

    if (/^(([1-9][0-9]*)|([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2}))$/g.exec(totalMoney) === null) {
      toast.error('请输入正确的金额')
      return
    }
    if (totalMoney >= 10000) {
      toast.error('捐赠金额大于10000元，请联系管理员')
      return
    }
    if (optionId === '1' && totalMoney < parseFloat(leastMoney / 100)) {
      toast.error(`捐赠金额不能小于${parseFloat(leastMoney / 100)}元`)
      return
    }
    if (optionId !== '1' && !totalMoney) {
      toast.error('请选择或输入捐赠金额')
      return
    }
    // if (totalMoney <= 0) {
    //   toast.error('捐赠金额不能小于0元')
    //   return
    // }
    console.log('optionId', optionId)
    if (optionId === '1') {
      history.push(`/info/${itemDetail.id}/${totalMoney}`)
    } else {
      history.push(`/info/${itemDetail.id}/${optionId}/${totalMoney}`)
    }
  }

  return (
    <div className="flex flex-col space-y-3 text-sm">
      <div className="flex space-x-2">
        <span className="my-auto">选项：</span>
        <Option name="任意捐" getOptionMoney={getOptionMoney} />
        {option.map((item) => (
          <Option
            key={item.id}
            id={item.id}
            name={item.name}
            money={parseFloat(item.money / 100)}
            getOptionMoney={getOptionMoney}
          />
        ))}
      </div>
      <div className="flex flex-wrap">
        <span className="my-auto">{optionId === '1' ? '捐赠金额:' : '捐赠份数:'}</span>
        <form className="py-1 px-2">
          {optionId === '1' ? (
            <div className="flex space-x-2">
              <input
                className="py-1 px-2 border focus:outline-none focus:border-blue-500"
                placeholder="请输入捐赠金额"
                onChange={(e) => handleMoneyChange(e)}
              />
              <div className="my-auto">{parseFloat(leastMoney / 100)}起赠</div>
            </div>
          ) : (
            <input
              className="py-1 px-2 border focus:outline-none focus:border-blue-500"
              placeholder="请输入捐赠份数"
              onChange={(e) => handleMoneyChange(e)}
            />
          )}
        </form>
        <button
          onClick={submitDonation}
          className="border-2 border-blue-500 hover:bg-blue-100 focus:outline-none px-3 py-1 rounded-md"
          type="submit"
        >
          立即捐赠
        </button>
      </div>
    </div>
  )
}

function DonateStatus({ id, title }) {
  const [donateDone, setDonateDone] = useState(false)
  // const [itemDetail, setItemDetail] = useState({})
  const [option, setOption] = useState([])
  const [itemDetail, setItemDetail] = useRecoilState(donationItemState)
  const [supportNum, setSupportNum] = useState()

  console.log(donationItemState)

  let history = useHistory()

  useEffect(() => {
    donationItem.getItemById(id).then((res) => {
      if (res.success) {
        setItemDetail(res.result)
      } else {
        history.push('/404')
      }
    })
  }, [id])

  useEffect(() => {
    donationItem.getSupportNum(id).then((res) => {
      if (res.success) {
        setSupportNum(res.result)
      } else {
        toast.error(res.message)
      }
    })
  }, [id])

  useEffect(() => {
    donationItem.getOptionById(id).then((res) => {
      if (res.success) {
        setOption(res.result)
      }
    })
  }, [])

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="w-full flex-grow flex flex-col">
      <div className="w-full py-8 md:px-24 flex flex-col md:flex-row">
        <div
          style={{ backgroundImage: `url(${FILE_BASE_URL}${itemDetail.picture})` }}
          className="w-full h-0 md:w-2/5 md:h-auto pb-3/4 md:pb-0 flex-shrink-0 bg-gray-300 bg-cover"
        />
        <div className="flex flex-col flex-grow px-3 justify-start space-y-3">
          <span className="text-gray-500 text-sm">
            {Date.now() > Date.parse(itemDetail.endTime) ? '已结束' : '筹集中'}
          </span>
          <div className="text-2xl font-bold">{itemDetail.name}</div>
          <div className="text-sm text-gray-500">{itemDetail.itemDesc}</div>
          <StatusBar
            target={parseFloat(itemDetail.targetMoney / 100)}
            raised={parseFloat(itemDetail.raisedMoney / 100)}
            support={supportNum}
          />
          {(itemDetail.endTime === null || Date.now() < Date.parse(itemDetail.endTime)) && (
            <Donate id={id} option={option} leastMoney={itemDetail.leastMoney} />
          )}
          <div className="text-gray-500 text-sm">
            {Date.now() > Date.parse(itemDetail.endTime)
              ? `项目已于${itemDetail.endTime}结束众筹，感谢您的关注！`
              : '感谢您的大力支持，学校会认真负责地用好每一笔捐赠！'}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:px-16 bg-gray-100 py-2 space-y-2">
        <div className="flex bg-white">
          <Box sx={{ width: '90%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
              >
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠详情" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠故事" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="常见问题" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠记录" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div dangerouslySetInnerHTML={{ __html: itemDetail.detail }} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div dangerouslySetInnerHTML={{ __html: itemDetail.story }} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div dangerouslySetInnerHTML={{ __html: itemDetail.question }} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <DonationRecord id={id} />
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default DonateStatus
