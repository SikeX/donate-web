const NavItem = ({title}) => {
    return (
        <span className='hidden md:inline-block px-2 py-6 hover:bg-gray-200 cursor-pointer my-auto'>{title}</span>
    )
}

const Nav = () => {
    return (
        <div className='flex shadow-sm w-full px-2 md:px-16 mb-2'>
            <NavItem title='首页' />
            <NavItem title='正在众筹' />
            <NavItem title='经典回顾' />
            <NavItem title='常见问题' />
            <div className='hidden md:inline-block md:flex-grow'></div>
            <form className='flex-grow md:w-40 py-4 md:py-6'>
                <input className='w-full border-2 px-2 py-1 text-sm bg-gray-100 focus:outline-none focus:ring-1 focus-blue rounded-md transition duration-700 ease-in-out' placeholder='请输入关键词' />
            </form>
        </div>
    )
}

export default Nav