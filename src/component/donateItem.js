import { Link } from "react-router-dom"

const DonateItem = ({tag, title}) => {

    const defaultStyle = 'flex lg:flex-col flex-shrink-0 lg:flex-shrink border shadow-lg hover:shadow-2xl rounded-lg transition transform hover:-translate-y-1 cursor-pointer my-1 w-full'

    const test = tag ? defaultStyle + ' lg:w-1/4' : defaultStyle
    
    return (
        <div className={test}>
            <div className='w-1/3 lg:w-full lg:h-44 bg-red-200'></div>
            <div className='flex flex-col divide-y-2 divide-dotted w-2/3 lg:w-full flex-grow'>
                <div className='flex flex-col py-1 px-4'>
                    <div className='text-gray-400 text-sm'>筹集中</div>
                    <Link to={{ pathname:'/donate/haha' }}>
                    <div className='py-2 hover:underline' >{title}</div>
                    <div className='text-gray-500 text-xs md:break-all h-8 md:h-auto truncate md:overflow-clip md:whitespace-normal'>
                        这里是一些介绍性的文本，这里是一些介绍性的文本，这里是一些介绍性的文本，这里是一些介绍性的文本，这里是一些介绍性的文本。
                    </div>
                    </Link>
                </div>
                
                <div className='flex flex-col px-3 py-2 space-y-1'>
                    <div className='flex justify-between'>
                        <span>目标</span>
                        <span>筹款中</span> 
                    </div>
                    <div className='w-full h-2 px-2 bg-blue-700 rounded-lg'></div>
                    <div className='flex justify-between'>
                        <span>共筹</span>
                        <span>支持数</span>
                        <span>完成度</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateItem