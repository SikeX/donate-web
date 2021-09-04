import { FaSearch } from 'react-icons/fa'

const NavItem = ({title}) => {
    return (
        <span className='hidden md:inline-block px-2 text-gray-500 hover:text-blue-500 cursor-pointer my-auto'>{title}</span>
    )
}

const Nav = () => {
    return (
        <div className='flex shadow-sm w-full px-2'>
            <div className='hidden md:block text-blue-500 text-2xl font-bold my-auto px-2 py-3'>校友众筹平台</div>
            <NavItem title='首页' />
            <NavItem title='正在众筹' />
            <NavItem title='经典回顾' />
            <NavItem title='常见问题' />
            <div className='hidden md:inline-block md:flex-grow'></div>
            <form className='flex-grow md:w-40 flex py-2'>
                <span className='absolute text-gray-500 text-xl py-2 pl-2'>
                    <FaSearch />
                </span>
                <input className='w-full border-2 px-3 py-2 pl-7 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus-blue rounded-md transition duration-700 ease-in-out' placeholder='请输入关键词' />
            </form>
        </div>
    )
}

export default Nav