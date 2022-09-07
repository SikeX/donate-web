import { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { useHistory } from 'react-router-dom'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import protocolItem from '../services/protocolItem'
import ProtocolItem from '../components/ProtocolItem'

function ProtocolChoose() {
  const [allItem, setAllItem] = useState([])

  const [total, setTotal] = useState(-1)

  let history = useHistory()

  useEffect(() => {
    if (localStorage.getItem('userInfo') === null) {
      history.push('/')
      return
    }
    protocolItem.queryByUsername(JSON.parse(localStorage.getItem('userInfo')).username).then((res) => {
      if (res.success) {
        setTotal(res.result.total)
        setAllItem(res.result)
      }
    })
  }, [])

  return (
    <div className="w-full h-screen flex flex-col">
      <Head />
      <Nav />
      {allItem ? (
        <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-16 my-3 ">
          {allItem.map((item) => (
            <ProtocolItem
              key={item.id}
              id={item.id}
              title={item.name}
              picture={item.picture}
              itemDesc={item.itemDesc}
              createTime={item.createTime}
              endTime={item.endTime}
              tag={false}
            />
          ))}
          {/* <MultipleSlider /> */}
        </div>
      ) : (
        <Skeleton animation="wave" variant="rectangular" width={800} height={118} />
      )}
      <div className="flex mx-auto py-8 px-4">
        <div />
        {/* <Pagination onChange={(event, page) => getParams({ pageNo: page })} sx={{ margin: 'auto' }} count={Math.ceil(total / 12)} color="primary" /> */}
      </div>
      <Footer />
    </div>
  )
}

export default ProtocolChoose
