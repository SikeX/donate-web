import DonateItem from './DonateItem'
import { Link } from 'react-router-dom'

const DonateClass = ({name}) => {
    return (
        <div className='w-full flex flex-col space-y-2 py-2'>
            <div className='w-full flex justify-between'>
                <div className='font-bold'>{name}</div>
                <Link to='/donate'><button className='hover:underline'>more>></button></Link>
            </div>
            <div className='bg-blue-700 w-full h-1'></div>
            <div className='w-full flex flex-col lg:flex-row justify-start lg:justify-center space-y-2 lg:space-x-6 xl:space-x-8 py-1'>
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
            </div>
        </div>
    )
}

export default DonateClass