import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import DonateStatus from '../components/DonateStatus'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'
import { useQuery } from '../utils/router'
import order from '../services/order'

function PayReturn() {
  const orderNo = useQuery().get('out_trade_no')

  const [isSuccess, setIsSuccess] = useState(true)

  useEffect(() => {
    order.checkStatus(orderNo).then((res) => {
      if (res.success) {
        setIsSuccess(true)
      } else {
        toast.error('支付失败')
      }
    })
  })

  return (
    <div className="w-full h-screen flex flex-col">
      <Head />
      <Nav />
      <div className="flex-grow flex">
        <div className="m-auto">
          <div>支付成功</div>
          <Link to="/" className="m-auto">
            <div className="hover:underline text-blue-500 cursor-pointer">返回首页</div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PayReturn
