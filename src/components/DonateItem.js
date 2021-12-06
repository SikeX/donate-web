import { useState } from "react"
import { Link } from "react-router-dom"
import { FILE_BASE_URL } from "../services/api"
import StatusBar from "./StatusBar"

const DonateItem = ({tag, title, targetMoney, raisedMoney, picture}) => {

    const imgUrl = FILE_BASE_URL + picture

    console.log(title)

    const [raised, setRaised] = useState(parseInt(raisedMoney))
    const [target, setTarget] = useState(parseInt(targetMoney))
    const [leftDay, setLeftDay] = useState(30)
    const [support, setSupport] = useState(100)

    const defaultStyle = 'flex lg:flex-col lg:flex-shrink-0 lg:flex-shrink shadow-lg hover:shadow-2xl rounded-lg transition transform hover:-translate-y-1 cursor-pointer w-full'

    const test = tag ? defaultStyle + ' lg:w-1/4' : defaultStyle
    
    return (
        <div className={test}>
            <div style={{backgroundImage: 'url('+imgUrl+')'}} className='w-1/3 lg:w-full h-0 pb-1/3 lg:pb-full bg-red-200 rounded-t-md bg-cover'>
                {/* <img src={imgUrl} style={{width:'auto',height:'100%'}} /> */}
            </div>
            <div className='flex flex-col divide-y-2 divide-dotted justify-between w-2/3 lg:w-full flex-grow md:py-3'>
                <div className='flex flex-col px-4'>
                    <div className='text-gray-400 text-sm'>筹集中</div>
                    <Link to={{ pathname:'/donate/haha' }}>
                    <div className='md:py-2 hover:underline font-bold' >{title}</div>
                    <div className='hidden md:block text-gray-500 text-xs md:break-all md:h-auto truncate md:overflow-clip md:whitespace-normal md:py-2 lg:pb-6'>
                        这里是一些介绍性的文本，这里是一些介绍性的文本，这里是一些介绍性的文本，这里是一些介绍性的文本，这里是一些介绍性的文本。
                    </div>
                    </Link>
                </div>
                <StatusBar raised={raised} target={target} leftDay={leftDay} support={support} />
            </div>
        </div>
    )
}

export default DonateItem