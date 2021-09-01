import Head from '../component/Head'
import Nav from '../component/Nav'
import MySlider from '../component/mySlider'
import Thanks from '../component/thanks'
import Footer from '../component/Footer'

import DonateClass from '../component/donateClass'

const Home = () => {
    return (
        <div className="flex w-screen flex-col">
            <Head />
            <div className='flex flex-col-reverse md:flex-col'>
                <Nav />
                <div className='w-full md:px-8 lg:px-16'>
                    <MySlider />
                </div>
            </div>
            <div className='my-4 px-1 md:px-8 lg:px-16 w-full'>
                <Thanks />
            </div>
            <div className='w-full flex flex-col px-1 md:px-8 lg:px-16 space-y-3'>
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