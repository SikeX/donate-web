import ProtocolStatus from '../components/ProtocolStatus'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'

function ProtocolDetail(props) {
  const { id } = props.match.params

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Head />
      <Nav />
      <ProtocolStatus id={id} />
      <Footer />
    </div>
  )
}

export default ProtocolDetail
