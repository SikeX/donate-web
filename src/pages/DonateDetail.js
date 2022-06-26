import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DonateStatus from '../components/DonateStatus'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'

function DonateDetail() {
  const { id } = useParams()

  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [id])

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Head />
      <Nav />
      <DonateStatus id={id} />
      <Footer />
    </div>
  )
}

export default DonateDetail
