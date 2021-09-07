import Head from '../components/Head'
import Nav from '../components/Nav'
import DonateChoose from '../components/DonateChoose'
import MultipleSlider from '../components/MultipleSlider'
import Footer from '../components/Footer'

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