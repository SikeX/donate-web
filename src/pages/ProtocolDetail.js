import ProtocolStatus from "../components/ProtocolStatus"
import Footer from "../components/Footer"
import Head from "../components/Head"
import Nav from "../components/Nav"

const ProtocolDetail = (props) => {


    const { id } = props.match.params

    return (
        <div className='w-full flex flex-col'>
            <Head />
            <Nav />
            <ProtocolStatus id={id} />
            <Footer />
        </div>
    )
}

export default ProtocolDetail
