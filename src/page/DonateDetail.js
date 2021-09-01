import DonateStatus from "../component/DonateStatus"
import Footer from "../component/Footer"
import Head from "../component/Head"
import Nav from "../component/Nav"

const DonateDetail = (props) => {
    console.log(props.match.params.name)
    return (
        <div className='w-full flex flex-col'>
            <Head />
            <Nav />
            <DonateStatus />
            <Footer />
        </div>
    )
}

export default DonateDetail