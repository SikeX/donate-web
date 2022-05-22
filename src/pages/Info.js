import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import {
  loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha
} from 'react-simple-captcha'
import {
  React, useEffect, useState,
} from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { TextField, Autocomplete, Link } from '@mui/material'
import { useHistory, useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import toast, { Toaster } from 'react-hot-toast'
import donationItem from '../services/donationItem'
import { FILE_BASE_URL } from '../services/api'
import dict from '../services/dict'
import Nav from '../components/Nav'
import Head from '../components/Head'
import Footer from '../components/Footer'
import FormikRadio from '../components/UI/FormikRadio'
import order from '../services/order'

function Info(props) {
  console.log(useParams())
  const { itemId, optionId, number } = useParams()

  const [item, setItem] = useState({})
  const [optionMoney, setOptionMoney] = useState()
  console.log(optionMoney)

  const [depatDict, setDepatDict] = useState([])

  const history = useHistory()

  // form data
  //   const [name, setName] = useState('')
  //   const [phone, setPhone] = useState('')
  //   const [email, setEmail] = useState('')
  //   const [depart, setDepart] = useState('')
  //   const [msg, setMsg] = useState('')
  //   const [inTime, setInTime] = useState('')
  //   const [stuNo, setStuNo] = useState('')

  const phoneRegExp = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/

  const validationSchema = yup.object({
    name: yup
      .string('请输入您的姓名')
      .required('请输入您的姓名'),
    phone: yup
      .string()
      .matches(phoneRegExp, '手机号不可用')
      .required('请输入您的手机号'),
    email: yup
      .string('请输入您的邮箱')
      .email('请输入有效的邮箱')
      .required('请输入您的邮箱'),
    // department: yup
    //   .string('请选择您的院系/部门'),
  })

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    msg: '',
    isSchoolMate: '',
    department: { value: '', text: '', title: '' },
    capture: '',
  }

  const isSchoolMateOptions = [
    { label: '是', value: 'yes' },
    { label: '否', value: 'no' }
  ]

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    donationItem.getItemById(itemId).then((res) => {
      console.log(res.result)
      if (res.success) {
        console.log(initialValues)
        setItem(res.result)
      } else {
        history.push('/404')
      }
    })
  }, [])

  useEffect(() => {
    if (number !== undefined) {
      donationItem.getOptionById(itemId).then((res2) => {
        console.log(res2.result)
        if (res2.success) {
          const optionList = res2.result
          console.log(optionId)
          const option = optionList.find((i) => i.id === optionId)
          if (option === undefined) {
            history.push('/404')
            return
          }
          console.log(option)
          setOptionMoney(option.money)
        }
      })
    }
  }, [itemId, optionId])

  useEffect(() => {
    loadCaptchaEnginge(4, '#1e40af', 'white')
  }, [])

  useEffect(() => {
    dict.getDictItems({ dictCode: 'department' }).then((res) => {
      if (res.success) {
        setDepatDict(res.result)
      }
    })
  }, [])

  const handleSubmit = (e) => {
    console.log(e.capture)
    console.log(validateCaptcha(e.capture))
    if (validateCaptcha(e.capture) === false) {
      toast.error('您输入的验证码不正确,请重新输入!(验证码大小写敏感)')
    } else {
      const orderInfo = {}
      orderInfo.name = e.name
      orderInfo.email = e.email
      orderInfo.phone = e.phone
      orderInfo.donationMsg = e.msg
      orderInfo.department = e.department.value
      orderInfo.isSchoolmate = e.isSchoolMate === 'yes' ? '1' : '0'
      orderInfo.itemId = itemId
      orderInfo.optionId = number ? '1' : optionId
      orderInfo.money = number ? number * optionMoney : optionId
      orderInfo.piece = number || 1
      order.postOrder(orderInfo).then((res) => {
        console.log(res)
        if (res.success) {
          toast.success('订单提交成功')
          history.push(`/order/${res.result.orderNo}`)
        }
      })
      // alert(JSON.stringify(e, null, 2))
    }
  }

  // const handleChange = (e, name) => {
  //     console.log(name)
  //     console.log(e.target.value)
  // }

  return (
    <div className="w-full h-screen flex flex-col">
      <Toaster />
      <Head />
      <Nav />
      <div className="w-full flex lg:flex-row flex-col flex-grow bg-gray-100 lg:px-16 lg:py-8 space-y-2 md:space-x-2">
        <div className="w-full lg:w-1/3 flex flex-col bg-white shadow-lg rounded-lg">
          <div style={{ backgroundImage: `url(${FILE_BASE_URL}${item.picture})` }} className="w-full h-0 pb-3/4 bg-red-400 rounded-t-lg bg-cover " />
          <div className="flex flex-col flex-grow p-4 ">
            <h1 className="px-2 py-1 text-xl ">哈尔滨工程大学校友基金会</h1>
            <div className="px-2 py-1">{item.name}</div>
            <div className="w-full h-px mx-2 my-2 bg-blue-800" />
            <div className="px-2 py-1 text-gray-500">总金额</div>
            <div className="px-1 py-1 text-3xl font-bold ">￥{number ? number * optionMoney : optionId} CNY</div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="bg-white w-full flex flex-col space-y-8 py-4 px-4 md:px-16">
            <div className="py-3 flex flex-col space-y-2">
              <div className="text-xl font-bold">捐赠信息填写</div>
              <div className="text-sm text-gray-400 border-b-2">
                请填写捐赠详细信息, *为必填项
              </div>
            </div>
            {/* form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                errors, touched, handleChange, values, setFieldValue,
              }) => (
                <Form className="flex flex-col space-y-3">
                  <div className="w-full flex space-x-2">
                    <TextField
                      id="name"
                      name="name"
                      label="捐赠人姓名"
                      required
                      fullWidth
                      // value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                    {/* <RadioGroup className='w-full' row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="female" control={<Radio />} label="先生" />
                                            <FormControlLabel value="male" control={<Radio />} label="女士" />
                                        </RadioGroup> */}
                  </div>
                  <TextField
                    id="phone"
                    name="phone"
                    type="phone"
                    fullWidth
                    required
                    label="手机号"
                    // value={values.phone}
                    onChange={handleChange}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                  <TextField
                    name="email"
                    type="email"
                    label="邮箱"
                    required
                    fullWidth
                    // value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <FormLabel component="legend">是否是校友</FormLabel>
                  <FormikRadio
                    name="isSchoolMate"
                    options={isSchoolMateOptions}
                  />
                  <Autocomplete
                    // id='department'
                    name="department"
                    options={depatDict}
                    getOptionLabel={(v) => v.text}
                    style={{ width: 300 }}
                    value={values.department}
                    onChange={(e, value) => {
                      console.log(value)
                      setFieldValue(
                        'department',
                        value !== null ? value : initialValues.department
                      )
                    }}
                    // error={touched.department && Boolean(errors.department)}
                    // helperText={touched.department && errors.department}
                    renderInput={(params) => (
                      <TextField
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...params}
                        name="department"
                        label="院系/单位"
                      />
                    )}
                  />
                  <TextField
                    name="msg"
                    id="outlined-multiline-flexible"
                    label="捐赠留言"
                    multiline
                    rows={4}
                    value={values.msg}
                    onChange={handleChange}
                    error={touched.msg && Boolean(errors.msg)}
                    helperText={touched.msg && errors.msg}
                  />
                  {/* <TextField

                                        ullWidth label="入学时间" id="fullWidth" />
                                    <TextField

                                        fullWidth label="学号(工号)" id="fullWidth" /> */}
                  {/* <FormControl component="fieldset">
                                        <FormLabel component="legend">是否需要收据</FormLabel>
                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="female" control={<Radio />} label="是" />
                                            <FormControlLabel value="male" control={<Radio />} label="否" />
                                        </RadioGroup>
                                    </FormControl> */}
                  <div className="flex w-full">
                    <div className="w-full" />
                    <LoadCanvasTemplateNoReload backgroundColor="blue" />
                  </div>
                  <div className="flex w-full">
                    <div className="w-full" />
                    <TextField
                      name="capture"
                      type="capture"
                      label="验证码"
                      placeholder="(大小写敏感)"
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="normal"
                      required
                    />
                  </div>
                  <div className="flex w-full">
                    <div className="w-full" />
                    <Button className="w-36" variant="contained" type="submit" disableElevation>
                      提交订单
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Info
