import DonateItem from './donateItem'
import { Link } from 'react-router-dom'

const DonateClass = ({name}) => {
    return (
        <div className='w-full flex flex-col space-y-2'>
            <div className='w-full flex justify-between'>
                <div>{name}</div>
                <Link to='/donate'><button className='hover:underline'>more>></button></Link>
            </div>
            <div className='bg-red-700 w-full h-1'></div>
            <div className='w-full flex flex-col md:flex-row justify-start md:justify-center md:space-x-8 md:flex-nowrap md:overflow-x-auto'>
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
                <DonateItem tag={true} title='研究生毕业捐赠' />
            </div>
        </div>
    )
}

export default DonateClass