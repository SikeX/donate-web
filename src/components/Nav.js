import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaSearch, FaCaretDown } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import donationClass from '../services/donationClass'
import donationItem from '../services/donationItem'
import protocolClass from '../services/protocolClass'
import { isLoginState, loginModalState } from '../state/state'
import LoginModal from './LoginModal'

function MenuItem({ id, name }) {
  let history = useHistory()

  const toDonate = () => {
    history.push(`/donate?classId=${id}`)
  }

  return (
    <div className="w-40 px-3 py-1 pr-8 hover:bg-blue-300" onClick={toDonate}>{name}</div>
  )
}

function NavItem({ title, menu }) {
  const [allClass, setAllClass] = useState([])

  useEffect(() => {
    donationClass.getAllClass().then((res) => {
      setAllClass(res.result.records)
    })
  }, [])
  useEffect(() => {
    protocolClass.getAllClass().then((res) => {
      setAllClass(res.result.records)
    })
  }, [])

  return (
    <div className="menu hidden lg:inline-block relative my-auto px-1">
      <div className="flex">
        <span className=" px-2 text-gray-500 hover:text-blue-500 cursor-pointer ">{title}
        </span>
        {menu && <FaCaretDown className="my-auto" />}
      </div>

      {menu
                && (
                  <div className="menuItem absolute hidden left-1 top-6 bg-white border shadow-md rounded-md min-w-full py-1 cursor-pointer" style={{ zIndex: 10002 }}>
                    {title === '正在众筹' && allClass.map((item) => <MenuItem id={item.id} name={item.name} />)}
                    {title === '协议捐赠' && allClass.map((item) => <MenuItem id={item.id} name={item.name} />)}
                  </div>
                )}
    </div>
  )
}

function Nav() {
  const [searchModalDisplay, setSearchModalDisplay] = useState('hidden')
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const [loginModal, setLoginModal] = useRecoilState(loginModalState)

  let history = useHistory()

  const toHome = () => {
    history.push('/')
  }

  const logout = () => {
    setIsLogin(false)
    localStorage.removeItem('userInfo')
  }

  const toDetail = (id) => {
    console.log('jump to', id)
    history.push(`/detail/${id}`)
  }

  const changeSearch = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value)
    if (e.target.value.length > 0) {
      donationItem.searchItems(e.target.value).then((res) => {
        if (res.success) {
          setSearchResult(res.result)
        } else {
          toast.error(res.message)
        }
      })
      setSearchModalDisplay('block')
    } else {
      setSearchModalDisplay('hidden')
    }
  }

  const handleBlur = (e) => {
    e.preventDefault()
    setSearchValue('')
    setSearchModalDisplay('hidden')
  }

  return (
    <div className="flex shadow-sm w-full px-2 py-5">
      <Toaster />
      <LoginModal
        onClose={() => {
          setLoginModal({ isShow: false, type: 'login' })
        }}
      />
      <div className="hidden lg:block text-blue-500 text-2xl font-bold my-auto px-2">校友众筹平台</div>
      <Link className="my-auto" to="/">
        <NavItem title="首页" menu={false} />
      </Link>
      <NavItem title="正在众筹" menu />
      <NavItem title="经典回顾" menu />
      <NavItem title="常见问题" menu />

      <Link className="my-auto" to="/protocol">
        {isLogin && <NavItem title="协议捐赠" menu />}
      </Link>

      <div className="hidden md:inline-block md:flex-grow" />
      <div className="hidden lg:inline-block lg:flex-grow" />
      <form className="relative flex-grow md:w-40 flex">
        <span className="absolute text-gray-500 text-xl pl-2 py-2">
          <FaSearch />
        </span>
        <input className="w-full border-2 px-3 py-2 pl-7 text-sm bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus-blue rounded-xl transition duration-700 ease-in-out" placeholder="请输入关键词" onChange={changeSearch} onBlur={handleBlur} value={searchValue} />
        { searchResult.length === 0
          ? <div className={`${searchModalDisplay} absolute w-80 left-8 top-12 px-4 py-2 rounded-md bg-white shadow-md z-50`}>未搜索到内容</div>
          : (
            <div className={`${searchModalDisplay} absolute w-80 left-8 top-12 px-4 py-2 rounded-md bg-white shadow-md z-50`}>
              {searchResult.map((item) => <div className="p-1 hover:bg-blue-200 cursor-pointer" key={item.id} onMouseDown={() => toDetail(item.id)}>{item.name}</div>)}
            </div>
          )}
      </form>
      <div className="flex space-x-2 my-auto px-3 cursor-pointer">
        {!isLogin && <div onClick={() => setLoginModal({ isShow: true, type: 'register' })}>校友注册</div>}
        {!isLogin && <div onClick={() => setLoginModal({ isShow: true, type: 'login' })}>登录</div>}
        {isLogin && <div onClick={logout}>登出</div>}
      </div>

    </div>
  )
}

export default Nav
