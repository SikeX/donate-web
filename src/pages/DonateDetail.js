import DonateStatus from '../components/DonateStatus'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'

function DonateDetail(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params

  return (
    <div className="w-full flex flex-col">
      <Head />
      <Nav />
      <DonateStatus id={id} />
      <Footer />
    </div>
  )
}

export default DonateDetail
