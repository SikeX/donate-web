import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { FILE_BASE_URL } from '../services/api'
import donationItem from '../services/donationItem'
import StatusBar from './StatusBar'

function DonateItem(props) {
  const {
    id, itemDesc, tag = true, title, targetMoney, raisedMoney, picture, leastMoney,
  } = props

  let history = useHistory()

  const imgUrl = FILE_BASE_URL + picture

  // const [raised, setRaised] = useState(parseFloat(raisedMoney))
  // const [target, setTarget] = useState(parseFloat(targetMoney))
  const [leftDay, setLeftDay] = useState(30)
  const [support, setSupport] = useState(0)

  const defaultStyle = 'flex lg:flex-col lg:flex-shrink-0 lg:flex-shrink shadow-lg hover:shadow-2xl rounded-lg transition transform hover:-translate-y-1 cursor-pointer w-full'

  const test = tag ? `${defaultStyle} lg:w-1/4` : defaultStyle

  const showDetail = (name) => {
    history.push({ pathname: `/detail/${id}`, params: { id } })
  }

  useEffect(() => {
    donationItem.getSupportNum(id).then((res) => {
      if (res.success) {
        setSupport(res.result)
      } else {
        toast.error(res.message)
      }
    })
  }, [id])

  return (
    <div className={test}>
      <div style={{ backgroundImage: `url(${imgUrl})` }} className="w-1/3 lg:w-full h-0 pb-1/3 lg:pb-full bg-red-200 rounded-t-md bg-cover">
        {/* <img src={imgUrl} style={{width:'auto',height:'100%'}} /> */}
      </div>
      <div className="flex flex-col divide-y-2 divide-dotted justify-between w-2/3 lg:w-full flex-grow md:py-3">
        <div className="flex flex-col px-4">
          <div className="text-gray-400 text-sm">筹集中</div>
          {/* <Link to={{ pathname:`/detail/${title}` }}> */}
          <div aria-hidden onClick={showDetail} className="md:py-2 hover:underline font-bold">{title}</div>
          <div className="hidden md:block text-gray-500 text-xs md:break-all md:h-auto truncate md:overflow-clip md:whitespace-normal md:py-2 lg:pb-6">
            {itemDesc}
          </div>
          {/* </Link> */}
        </div>
        <StatusBar raised={parseFloat(raisedMoney / 100)} target={parseFloat(targetMoney / 100)} leftDay={leftDay} support={support} />
      </div>
    </div>
  )
}

export default DonateItem
