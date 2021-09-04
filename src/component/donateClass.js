import DonateItem from './donateItem'
import { Link } from 'react-router-dom'

const DonateClass = ({name}) => {
    return (
        <div className='w-full flex flex-col space-y-2'>
            <div className='w-full flex justify-between'>
                <div className='font-bold'>{name}</div>
                <Link to='/donate'><button className='hover:underline'>more>></button></Link>
            </div>
            <div className='bg-blue-700 w-full h-1'></div>
            <div className='w-full flex flex-col lg:flex-row justify-start lg:justify-center lg:space-x-6'>
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
            </div>
        </div>
    )
}

export default DonateClass