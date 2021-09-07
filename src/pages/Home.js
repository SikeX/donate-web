import Head from '../components/Head'
import Nav from '../components/Nav'
import MySlider from '../components/MySlider'
import Thanks from '../components/Thanks'
import Footer from '../components/Footer'

import DonateClass from '../components/DonateClass'

const Home = () => {
    return (
        <div className="flex w-screen flex-col">
            <Head />
            <div className='flex flex-col-reverse md:flex-col'>
                <Nav />
                <MySlider />
            </div>
            <div className='my-4 px-1 md:px-12 lg:px-16 w-full'>
                <Thanks />
            </div>
            <div className='w-full flex flex-col px-1 md:px-12 lg:px-16 space-y-3 py-1'>
                <DonateClass name='菁菁校园' />
                <DonateClass name='人才培养' />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home