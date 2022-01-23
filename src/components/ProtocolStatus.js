import { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link, useHistory } from 'react-router-dom'
import { FILE_BASE_URL } from '../services/api'
import TabPanel from './UI/TabPanel'
import StatusBar from './StatusBar'
import protocolItem from '../services/protocolItem'

function Item({ name }) {
  return (
    <div className="px-4 py-3 hover:bg-gray-400 cursor-pointer text-xl font-bold">{name}</div>
  )
}

function Protocol({ id }) {
  const [isfreeMoney, setIsfreeMoney] = useState(true)

  return (
    <div className="flex flex-col space-y-2 text-sm">
      <div className="flex space-x-2">
        {/* <span className='my-auto'>选项：</span>
                <div className='cursor-pointer px-2 py-1 border hover:border-blue-500 hover:text-blue-500 focus:text-blue-500'
                     onClick={() => {setIsfreeMoney(true)}}
                >任意捐</div> */}
      </div>

    </div>
  )
}

function ProtocolStatus({ id, title }) {
  const [donateDone, setDonateDone] = useState(false)
  const [itemDetail, setItemDetail] = useState({})

  console.log(itemDetail)

  let history = useHistory()

  useEffect(() => {
    protocolItem.getItemById(id).then((res) => {
      if (res.success) {
        setItemDetail(res.result)
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
          <span className="text-gray-500 text-sm">{donateDone ? 'done' : '协议项目详细信息'}</span>
          <div className="text-2xl font-bold">{itemDetail.name}</div>
          <div className="text-sm text-gray-500">{itemDetail.itemDesc}</div>
          <div className="text-sm text-gray-500">开始时间：{itemDetail.createTime}</div>
          <div className="text-sm text-gray-500">结束时间：{itemDetail.endTime}</div>

          {!donateDone && <Protocol id={id} />}
          <div className="text-gray-500 text-sm">{donateDone ? '项目已于2021-04-23 18:00结束众筹，感谢您的关注！' : '感谢您的大力支持，学校会认真负责地用好每一笔捐赠！'}</div>
        </div>
      </div>

      <div className="flex flex-col md:px-16 bg-gray-100 py-2 space-y-2">
        <div className="flex bg-white">
          <Box sx={{ width: '90%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠详情" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="捐赠故事" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="常见问题" />
                <Tab sx={{ fontSize: 16, fontWeight: 'bold' }} label="支出情况" />
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
              <div dangerouslySetInnerHTML={{ __html: itemDetail.cost }} />
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default ProtocolStatus
