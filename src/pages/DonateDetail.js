import DonateStatus from "../components/DonateStatus"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Nav from "../components/Nav"

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