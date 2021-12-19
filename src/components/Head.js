import { FaList } from "react-icons/fa"

const HeadItem = ({title}) => {
    return (
        <span className=' md:inline-block hover:underline cursor-pointer my-auto'>{title}</span>
    )
}

const Head = () => {
    return (
        <div className='sticky md:hidden top-0 z-40 space-x-2 bg-blue-700 text-white text-sm px-2 lg:px-16 py-1 h-10 md:h-8 w-full my-auto flex' style={{zIndex:1001}}>
            <div className='mx-auto my-auto text-lg'>哈尔滨工程大学捐赠平台</div>
            {/* <HeadItem title='校友注册' />
            <HeadItem title='登录' />
            <div className='flex-grow'></div>
            <HeadItem title='移动版' />
            <HeadItem title='微信公众号' />
            <HeadItem title='校友社区' />
            <HeadItem title='校友网' /> */}
        </div>
    )
}

export default Head