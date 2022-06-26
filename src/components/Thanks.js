import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Marquee from 'react-fast-marquee'
import order from '../services/order'

function Thanks() {
  const [thanksList, setThanksList] = useState([])

  useEffect(() => {
    order.getThanksList().then((res) => {
      if (res.success) {
        setThanksList(res.result)
      } else {
        toast.error('获取感谢列表失败')
      }
    })
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div>捐赠寄语</div>
      <div className="w-full bg-blue-700 h-1" />
      <Marquee pauseOnHover>
        {thanksList.map((item, index) => <div key={item.id} className="px-5 inline-block whitespace-nowrap cursor-pointer">{item.donationMsg} - {item.name}</div>)}
      </Marquee>
    </div>
  )
}

export default Thanks
