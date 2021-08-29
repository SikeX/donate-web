import Head from '../component/Head'
import Nav from '../component/Nav'
import DonateChoose from '../component/DonateChoose'
import MultipleSlider from '../component/MultipleSlider'
import Footer from '../component/Footer'

const Donate = () => {
    return (
        <div className='w-screen'>
            <Head />
            <Nav />
            <DonateChoose />
            <div className='w-full px-1 md:px-16 my-3'>
                <MultipleSlider />
            </div>
            <Footer />
        </div>
    )
}

export default Donate