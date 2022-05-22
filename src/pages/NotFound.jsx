import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'
import notFound from '../assets/404.svg'

function NotFound() {
  let history = useHistory()

  const toHome = () => {
    history.push('/')
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <Head />
      <Nav />
      <div className="flex-grow flex flex-col">
        <img src={notFound} alt="404" className="h-96" />
        <div className="flex mx-auto py-5"><div>您访问的页面不存在</div>
          <a className="text-blue-500 hover:underline cursor-pointer" onClick={toHome}>返回首页</a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default NotFound
