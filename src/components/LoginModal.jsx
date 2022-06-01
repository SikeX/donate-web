import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { TextField, Autocomplete } from '@mui/material'
import { useEffect, useState } from 'react'
// import GlobalAlert from './GlobalAlert'
import toast, { Toaster } from 'react-hot-toast'
import * as yup from 'yup'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Form, Formik } from 'formik'
import user from '../services/user'
import { isLoginState, loginModalState } from '../state/state'

function LoginModal(props) {
  const { isOpen, onClose } = props

  const [userInfo, setUserInfo] = useState({})
  const [registerUserInfo, setRegisterUserInfo] = useState({})
  const [isRegister, setIsRegister] = useState(false)
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const [loginModal, setLoginModal] = useRecoilState(loginModalState)

  const phoneRegExp = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/

  const registerValidationSchema = yup.object({
    username: yup.string('请输入您的姓名').required('请输入您的姓名'),
    phone: yup.string().matches(phoneRegExp, '手机号不可用').required('请输入您的手机号'),
    email: yup.string('请输入您的邮箱').email('请输入有效的邮箱').required('请输入您的邮箱'),
    password: yup
      .string()
      .required('请输入您的密码')
      .matches(
        /(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{8,20}$/,
        '密码必须包含字母和数字，且长度为8-20位'
      ),
    confirmPassword: yup
      .string()
      .required('请再次输入您的密码')
      .oneOf([yup.ref('password'), null], '两次输入的密码不一致'),
    // department: yup
    //   .string('请选择您的院系/部门'),
  })

  const loginValidationSchema = yup.object({
    username: yup.string('请输入您的姓名').required('请输入您的姓名'),
    password: yup
      .string()
      .required('请输入您的密码'),
  })

  const handleRegister = (e) => {
    console.log(e)
    user.register(e).then((res) => {
      if (res.success) {
        toast.success('注册成功')
        setLoginModal({ isShow: true, type: 'login' })
      } else {
        toast.error(res.message)
      }
    })
  }

  const handleLogin = (e) => {
    console.log(userInfo)
    user.login(e).then((res) => {
      console.log(res)
      if (res.success) {
        localStorage.setItem('userInfo', JSON.stringify(res.result.userInfo))
        setLoginModal({ isShow: false, type: 'login' })
        setIsLogin(true)
        toast.success('登录成功')
        onClose()
      } else {
        toast.error(res.message)
      }
    })
  }

  return (
    <Dialog fullWidth open={loginModal.isShow} onClose={() => onClose()}>
      <Toaster />
      <DialogTitle>{loginModal.type === 'register' ? '用户注册' : '用户登录'}</DialogTitle>
      {loginModal.type === 'register'
        ? (
          <Formik
            validationSchema={registerValidationSchema}
            onSubmit={handleRegister}
            initialValues={{
              username: '',
              email: '',
              phone: '',
              password: '',
              confirmPassword: '',
            }}
          >
            {({
              handleChange,
              errors,
            }) => (
              <Form className="flex flex-col px-4 py-4 space-y-4">
                <TextField
                  id="username"
                  name="username"
                  type="username"
                  // fullWidth
                  required
                  label="用户名"
                  // value={values.phone}
                  onChange={handleChange}
                  error={errors.username}
                  helperText={errors.username}
                />
                <TextField
                  name="password"
                  type="password"
                  label="密码"
                  required
                  // fullWidth
                  // value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  isInvalid={!!errors.password}
                />
                <TextField
                  name="confirmPassword"
                  type="password"
                  label="确认密码"
                  required
                  // fullWidth
                  // value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                />
                <TextField
                  id="phone"
                  name="phone"
                  type="phone"
                  // fullWidth
                  required
                  label="手机号"
                  // value={values.phone}
                  onChange={handleChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  // fullWidth
                  required
                  label="邮箱"
                  // value={values.phone}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <div className="flex space-x-2">
                  <button type="submit" className="bg-black text-white px-4 py-2 cursor-pointer">
                    立即注册
                  </button>

                  {loginModal.type === 'login' && (
                    <a
                      className="text-sm text-blue-500 hover:underline mt-auto cursor-pointer"
                      onClick={() => setIsRegister(true)}
                    >
                      还没有账号?，立即注册
                    </a>
                  )}
                  {loginModal.type === 'register' && (
                    <a
                      className="text-sm text-blue-500 hover:underline mt-auto cursor-pointer"
                      onClick={() => setIsRegister(false)}
                    >
                      已有账号?，立即登录
                    </a>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )
        : (
          <Formik
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
            initialValues={{
              username: '',
              password: '',
            }}
          >
            {({
              handleChange,
              errors,
            }) => (
              <Form className="flex flex-col px-4 py-4 space-y-4">
                <TextField
                  id="username"
                  name="username"
                  type="username"
                  // fullWidth
                  required
                  label="用户名"
                  // value={values.phone}
                  onChange={handleChange}
                  error={errors.username}
                  helperText={errors.username}
                />
                <TextField
                  name="password"
                  type="password"
                  label="密码"
                  required
                  // fullWidth
                  // value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  isInvalid={!!errors.password}
                />
                <div className="flex space-x-2">
                  <button type="submit" className="bg-black text-white px-4 py-2 cursor-pointer">
                    立即登录
                  </button>

                  {loginModal.type === 'login' && (
                    <a
                      className="text-sm text-blue-500 hover:underline mt-auto cursor-pointer"
                      onClick={() => setLoginModal({ isShow: true, type: 'register' })}
                    >
                      还没有账号?，立即注册
                    </a>
                  )}
                  {loginModal.type === 'register' && (
                    <a
                      className="text-sm text-blue-500 hover:underline mt-auto cursor-pointer"
                      onClick={() => setLoginModal({ isShow: true, type: 'login' })}
                    >
                      已有账号?，立即登录
                    </a>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}

    </Dialog>
  )
}

export default LoginModal
