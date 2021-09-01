const HeadItem = ({title}) => {
    return (
        <span className='hidden md:inline-block hover:underline cursor-pointer my-auto'>{title}</span>
    )
}

const Head = () => {
    return (
        <div className='sticky top-0 z-40 md:flex space-x-2 bg-green-700 text-white text-sm px-2 lg:px-16 py-1 h-10 md:h-8 w-full my-auto'>
            <HeadItem title='校友注册' />
            <HeadItem title='登录' />
            <div className='flex-grow'></div>
            <HeadItem title='移动版' />
            <HeadItem title='微信公众号' />
            <HeadItem title='校友社区' />
            <HeadItem title='校友网' />
        </div>
    )
}

export default Head