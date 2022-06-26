import { React, useEffect, useState } from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import MySlider from '../components/MySlider'
import Thanks from '../components/Thanks'
import Footer from '../components/Footer'
import DonateClass from '../components/DonateClass'
import donationClass from '../services/donationClass'

function Home() {
  const [donationClassList, setDonationClassList] = useState([])

  useEffect(() => {
    donationClass.getHomeClass().then((res) => {
      console.log(res)
      if (res.success) {
        setDonationClassList(res.result)
      }
    })
  }, [])

  return (
    <div className="flex w-screen flex-col">
      <Head />
      <div className="flex flex-col-reverse lg:flex-col">
        <Nav />
        <MySlider />
      </div>
      <div className="my-4 px-1 md:px-12 lg:px-16 w-full">
        <Thanks />
      </div>
      <div className="w-full flex flex-col px-1 md:px-12 lg:px-16 space-y-3 py-1">
        {donationClassList.map((item) => <DonateClass key={item.id} id={item.id} name={item.name} />)}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
