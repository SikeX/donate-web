/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import Countdown from 'react-countdown'
import Nav from '../components/Nav'
import Head from '../components/Head'
import Footer from '../components/Footer'
import order from '../services/order'
import { isIos, isWeixn } from '../utils/runtimeEnv'
import { BASE_URL } from '../services/api'

function Completionist() {
  return <span className="text-red-500">订单已超时!</span>
}

function Order() {
  const { orderNo } = useParams()
  console.log(orderNo)
  const [orderInfo, setOrderInfo] = useState({})
  const [createTime, setCreateTime] = useState(Date.now())

  let history = useHistory()

  useEffect(() => {
    order.getOrder(orderNo).then((res) => {
      if (res.success) {
        console.log(res.result.createTime)
        setOrderInfo(res.result)
        let createTimeList = res.result.createTime.split(' ')
        setCreateTime(createTimeList.join('T'))
      } else {
        history.push('/404')
      }
    })
  }, [])

  const aliPay = () => {
    // const newOrderInfo = Object.assign(orderInfo, { status: 2, payMethod: 1 })
    // console.log(newOrderInfo)
    // order.updateOrder(orderInfo)
    if (Date.parse(orderInfo.expiredTime) < Date.now()) {
      toast.error('订单已超时!')
      return
    }
    const aliOrderInfo = {
      id: orderNo,
      title: '订单支付',
    }
    order.postAlipay(aliOrderInfo).then((res) => {
      console.log(res)
      const newWindow = window.open('', '_blank')
      newWindow.document.write(res)
      newWindow.focus()
      // history.push('/payDone')
    })
  }

  const wxPay = () => {
    // const newOrderInfo = Object.assign(orderInfo, { status: 2, paymentType: 1 })
    // console.log(newOrderInfo)
    // order.updateOrder(orderInfo)
    if (Date.parse(orderInfo.expiredTime) < Date.now()) {
      toast.error('订单已超时!')
      return
    }
    const wxOrderInfo = {
      orderNo,
    }
    order.postWxPay(wxOrderInfo).then((res) => {
      console.log(res)
      if (res.success) {
        if (isWeixn()) {
          window.location.href = res.result.codeUrl
        } else if (isIos()) {
          window.location.href = `http://101.43.100.98:3007/wxpay/${orderNo}`
        } else {
          window.open(`http://101.43.100.98:3007/wxpay/${orderNo}`, '_blank')
        }
      } else {
        toast.error(res.message)
      }
    })
  }

  // 这个方法是监测浏览器窗口发生变化的时候执行
  window.addEventListener('visibilitychange', () => {
    // alert(global.username)
    if (document.hidden === false) {
      order.getOrder(orderNo).then((res) => {
        if (res.success) {
          if (res.result.status === 1) {
            history.push('/')
          }
        }
      })
    }
    // 不覆盖的话username永远都是我们设的初始值
  })

  const cancelOrder = () => {
    if (window.confirm('确定取消订单吗？')) {
      order.updateOrder(orderNo).then((res) => {
        if (res.success) {
          toast.success('取消订单成功')
          history.push('/home')
        } else {
          toast.error(res.message)
        }
      })
    }
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />
    }
    // Render a countdown
    return (
      <span className="text-red-500">
        {hours}:{minutes}:{seconds}
      </span>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col ">
      <Head />
      <Nav />
      <div className="flex-grow w-full flex flex-col-reverse md:flex md:flex-row py-4 px-8 md:px-16 bg-gray-50 md:space-x-4 space-y-2">
        <div className="w-full md:w-2/3 flex flex-col space-y-4">
          <div className="flex flex-col py-2 px-4 shadow-md bg-white">
            <div className="text-lg py-4">捐赠信息</div>
            <div className="text-gray-500 text-sm space-y-2">
              <div>捐赠项目名:{orderInfo.itemName}</div>
              <div>捐赠人姓名: {orderInfo.name}</div>
              <div>捐赠人电话号码:{orderInfo.phone} </div>
              <div>捐赠人邮件: {orderInfo.email}</div>
            </div>
          </div>
          <div className="flex flex-col py-2 px-4 shadow-md bg-white">
            <div className="relative flex justify-between">
              <div className="text-lg py-4">订单信息</div>
              <div
                className="absolute right-1 bg-red-600 rounded-2xl text-white px-2 py-1 text-sm hover:bg-red-500 shadow-md cursor-pointer"
                onClick={cancelOrder}
              >
                取消订单
              </div>
            </div>
            <div className="flex flex-col text-gray-500 text-sm space-y-2">
              <div>订单号:{orderInfo.orderNo}</div>
              <div>订单创建时间:{orderInfo.createTime}</div>
              <div className="flex">
                <div>支付剩余时间:</div>
                <Countdown
                  className="text-red-500"
                  date={new Date(createTime).getTime() + 1800000}
                  renderer={renderer}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-2 px-4 shadow-md bg-white">
            <div className="text-xl py-4">支付方式</div>
            <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
              <div
                className="bg-green-400 flex px-4 py-2 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
                onClick={wxPay}
              >
                <svg
                  t="1643531126786"
                  className="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1764"
                  width="72"
                  height="72"
                >
                  <path
                    d="M390.21952 631.09248c-61.26464 34.01984-70.35136-19.09888-70.35136-19.09888l-76.78208-178.46656c-29.54368-84.80512 25.56928-38.23744 25.56928-38.23744s47.2896 35.63392 83.17952 57.34784c35.87072 21.71392 76.75776 6.3744 76.75776 6.3744l501.9648-230.7776C837.94688 113.4528 684.96256 38.4 511.76576 38.4 229.11104 38.4 0 238.13248 0 484.52864c0 141.72544 75.8656 267.8656 194.0352 349.62176l-21.31072 122.01856c0 0-10.38848 35.6224 25.61536 19.10016 24.53376-11.26528 87.0784-51.63392 124.30976-76.20224 58.53056 20.31616 122.2976 31.5968 189.14432 31.5968 282.63168 0 511.79008-199.73248 511.79008-446.13376 0-71.36896-19.31008-138.76864-53.51552-198.59456C810.14144 381.7792 438.15808 604.51712 390.21952 631.09248L390.21952 631.09248 390.21952 631.09248zM390.21952 631.09248"
                    p-id="1765"
                    fill="#ffffff"
                  />
                </svg>
                <div className="my-auto px-4 text-xl text-white">微信支付</div>
              </div>
              {/* {!isWeixn() && (
                <div className="bg-blue-500 flex px-4 py-2 rounded-xl shadow-md hover:bg-blue-600 hover:shadow-xl cursor-pointer" onClick={aliPay}>
                  <svg t="1643532046855" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2603" width="72" height="72"><path d="M653.8 615.5c70.2-125.4 95.7-244.6 95.7-244.6H513.4v-87.8h280.8v-37.6H513.4V113.8H385.8v131.7H130.5v37.6h255.3v87.8h-217v37.6h440.4c0 6.3 0 6.3-6.4 12.5 0 43.9-31.9 106.6-57.4 156.8-325.5-125.4-421.2-50.2-446.8-37.6-217 150.5-12.8 338.6 19.1 332.4 229.8 50.2 376.5-43.9 478.7-163.1 6.4 6.3 12.8 6.3 19.1 6.3 70.2 37.6 408.5 194.4 408.5 194.4V722.1c-51.1 0-236.1-62.7-370.2-106.6z m-165.9 56.4c-159.6 200.7-351 138-382.9 125.4-76.6-18.8-102.1-156.7-6.4-200.6 159.6-50.2 300 6.3 402.1 56.4-6.4 12.5-12.8 18.8-12.8 18.8z" p-id="2604" fill="#ffffff" /></svg>
                  <div className="my-auto px-4 text-xl text-white">
                    支付宝
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div className=" flex-grow h-1/2 bg-black opacity-70 text-white rounded-xl px-8 py-4">
          <div className="text-lg py-4">订单总额</div>
          <div className="px-1 py-1 text-3xl font-bold ">￥ {parseFloat(orderInfo.money / 100)} CNY</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Order
