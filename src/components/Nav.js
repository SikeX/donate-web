import { FaSearch, FaCaretDown } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'

const MenuItem = ({ name }) => {
    return (
        <div className='px-3 py-1 pr-8'>{name}</div>
    )
}

const NavItem = ({ title, menu }) => {
    return (
        <div className='menu hidden md:inline-block relative my-auto px-1'>
            <div className='flex'>
                <span className=' px-2 text-gray-500 hover:text-blue-500 cursor-pointer '>{title}
                </span>
                {menu && <FaCaretDown className='my-auto' />}
            </div>

            {menu &&
                <div className='menuItem absolute hidden left-1 top-6 bg-white border shadow-md rounded-md min-w-full py-1 cursor-pointer' style={{ zIndex: 10002 }}>
                    <MenuItem name='haha' />
                    <MenuItem name='haha' />
                    <MenuItem name='hahaaaaaaa' />
                </div>}
        </div>
    )
}

const Nav = () => {

    let history = useHistory()

    const toHome = () => {
        history.push('/')
    }

    return (
        <div className='flex shadow-sm w-full px-2 py-5'>
            <div className='hidden md:block text-blue-500 text-2xl font-bold my-auto px-2'>校友众筹平台</div>
            <Link className='my-auto' to='/'>
                <NavItem title='首页' menu={false} />
            </Link>
            <Link className='my-auto' to='/donate'>
            <NavItem title='正在众筹' menu={true} />
            </Link>
            <NavItem title='经典回顾' menu={true} />
            <NavItem title='常见问题' menu={true} />
            <div className='hidden md:inline-block md:flex-grow'></div>
            <form className='flex-grow md:w-40 flex'>
                <span className='absolute text-gray-500 text-xl pl-2 py-2'>
                    <FaSearch />
                </span>
                <input className='w-full border-2 px-3 py-2 pl-7 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus-blue rounded-xl transition duration-700 ease-in-out' placeholder='请输入关键词' />
            </form>
            <NavItem title='校友注册' menu={false} />
            <NavItem title='登录' menu={false} />
        </div>
    )
}

export default Nav