import { useHistory, useParams } from 'react-router-dom'
import QRCode from 'qrcode.react'
import { useEffect, useState } from 'react'
import DonateStatus from '../components/DonateStatus'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'
import order from '../services/order'
import { isWeixn } from '../utils/runtimeEnv'

function WxPay() {
  const { orderNo } = useParams()

  const [orderInfo, setOrderInfo] = useState({})

  let history = useHistory()

  useEffect(() => {
    order.getOrder(orderNo).then((res) => {
      if (res.success) {
        setOrderInfo(res.result)
        if (isWeixn()) {
          window.location.href = res.result.codeUrl
        }
      } else {
        history.push('/404')
      }
    })
  }, [])

  return (
    <div className="w-full h-screen flex flex-col">
      <Head />
      <Nav />
      <div className="flex-grow py-5">
        <div className="bg-green-200 w-64 mx-auto flex flex-col rounded-md shadow-md">
          <div className="p-2 text-xs flex flex-col">
            <div>订单号:{orderNo}</div>
            <div>金额:{orderInfo.money}</div>
          </div>
          <QRCode className="" size={256} value={orderInfo.codeUrl} renderAs="canvas" />
          <div className="py-2 text-center text-blue ">请使用微扫码支付</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WxPay
