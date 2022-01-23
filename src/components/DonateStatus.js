import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link, useHistory } from 'react-router-dom'
import { FILE_BASE_URL } from '../services/api'
import TabPanel from './UI/TabPanel'
import StatusBar from './StatusBar'
import donationItem from '../services/donationItem'

function Item({ name }) {
  return (
    <div className="px-4 py-3 hover:bg-gray-400 cursor-pointer text-xl font-bold">{name}</div>
  )
}

function Option({ name, money, getOptionMoney }) {
  // const isChecked = name

  return (
    <div className="donation-option">
      <input type="radio" name="option" id={name} value={money} onChange={(e) => getOptionMoney(e, name)} className="sr-only" />
      {name === '任意捐' ? (
        <label className="cursor-pointer px-2 py-1 border-2 hover:border-blue-500 hover:text-blue-500 focus:text-blue-500 rounded-md" htmlFor={name}>{name}
        </label>
      ) : (
        <label className="cursor-pointer px-2 py-1 border-2 hover:border-blue-500 hover:text-blue-500 focus:text-blue-500 rounded-md" htmlFor={name}>{`${name}(${money}元)`}
        </label>
      )}

    </div>
  )
}

function Donate({ id, option, leastMoney }) {
  const [isfreeMoney, setIsfreeMoney] = useState(true)

  const [money, setMoney] = useState()

  const [totalMoney, setTotalMoney] = useState()

  const getOptionMoney = (e, tag) => {
    console.log(e.target.value)
    // eslint-disable-next-line no-unused-expressions
    tag === '任意捐' ? setIsfreeMoney(true) : setIsfreeMoney(false)
    setMoney(e.target.value)
  }

  const handleMoneyChange = (e) => {
    console.log(isfreeMoney ? parseInt(e.target.value) : parseInt(e.target.value) * money)
    setTotalMoney(isfreeMoney ? parseInt(e.target.value) : parseInt(e.target.value) * money)
  }

  return (
    <div className="flex flex-col space-y-3 text-sm">
      <div className="flex space-x-2">
        <span className="my-auto">选项：</span>
        <Option name="任意捐" getOptionMoney={getOptionMoney} />
        {option.map(((item) => <Option id={item.id} name={item.name} money={item.money} getOptionMoney={getOptionMoney} />))}
      </div>
      <div className="flex flex-wrap">
        <span className="my-auto">{isfreeMoney ? '捐赠金额:' : '捐赠份数:'}</span>
        <form className="py-1 px-2">
          {isfreeMoney
            ? (
              <div className="flex">
                <input
                  className="py-1 px-2 border focus:outline-none focus:border-blue-500"
                  placeholder="请输入捐赠金额"
                  onChange={(e) => handleMoneyChange(e)}
                />
                <div className="my-auto">{leastMoney}起赠</div>
              </div>
            )
            : (
              <input
                className="py-1 px-2 border focus:outline-none focus:border-blue-500"
                placeholder="请输入捐赠份数"
                onChange={(e) => handleMoneyChange(e)}
              />
            )}
        </form>
        <Link to={`/info/${id}/${totalMoney}`}>
          <button className="border-2 border-blue-500 hover:bg-blue-100 focus:outline-none px-3 py-1 rounded-md" type="submit">立即捐赠
          </button>
        </Link>
      </div>
    </div>
  )
}

function DonateStatus({ id, title }) {
  const [donateDone, setDonateDone] = useState(false)
  const [itemDetail, setItemDetail] = useState({})
  const [option, setOption] = useState([])

  console.log(itemDetail)

  let history = useHistory()

  useEffect(() => {
    donationItem.getItemById(id).then((res) => {
      if (res.success) {
        setItemDetail(res.result)
      }
    })
  }, [])

  useEffect(() => {
    donationItem.getOptionById(id).then((res) => {
      if (res.success) {
        console.log(res)
        setOption(res.result)
      }
    })
  }, [])

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full py-8 md:px-24 flex flex-col md:flex-row">
        <div style={{ backgroundImage: `url(${FILE_BASE_URL}${itemDetail.picture})` }} className="w-full h-0 md:w-2/5 md:h-auto pb-3/4 md:pb-0 flex-shrink-0 bg-gray-300 bg-cover" />
        <div className="flex flex-col flex-grow px-3 justify-start space-y-3">
          <span className="text-gray-500 text-sm">{donateDone ? 'done' : '筹集中'}</span>
          <div className="text-2xl font-bold">{itemDetail.name}</div>
          <div className="text-sm text-gray-500">{itemDetail.itemDesc}</div>
          <StatusBar target={parseInt(itemDetail.targetMoney)} raised={parseInt(itemDetail.raisedMoney)} support={50} />
          {!donateDone && <Donate id={id} option={option} leastMoney={itemDetail.leastMoney} />}
          <div className="text-gray-500 text-sm">{donateDone ? '项目已于2021-04-23 18:00结束众筹，感谢您的关注！' : '感谢您的大力支持，学校会认真负责地用好每一笔捐赠！'}</div>
        </div>
      </div>

      <div className="flex flex-col md:px-16 bg-gray-100 py-2 space-y-2">
        <div className="flex bg-white">
          <Box sx={{ width: '90%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons={false} aria-label="scrollable prevent tabs example">
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠详情" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠故事" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="常见问题" />
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
          </Box>
        </div>
      </div>
    </div>
  )
}

export default DonateStatus
