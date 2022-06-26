import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'

function WxPayReturn() {
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

export default WxPayReturn
