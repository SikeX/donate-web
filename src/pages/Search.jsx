import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import { TextField } from '@mui/material'
import Nav from '../components/Nav'
import Head from '../components/Head'
import Footer from '../components/Footer'
import order from '../services/order'

function Search() {
  const [orderList, setOrderList] = useState([])

  const phoneRegExp = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/

  const validationSchema = yup.object({
    phone: yup
      .string()
      .matches(phoneRegExp, '手机号不可用')
      .required('请输入您的手机号'),
  })

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  const handleSubmit = (values) => {
    order.getOrdersByPhone(values.phone).then((res) => {
      if (res.success) {
        setOrderList(res.result.records)
      }
    })
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <Head />
      <Nav />
      <div className="flex-grow flex flex-col">
        <Formik
          initialValues={{ phone: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors, touched, handleChange, values, setFieldValue,
          }) => (
            <Form className="flex flex-col space-y-3">
              <div className="flex px-4">
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  type="phone"
                  required
                  label="手机号"
                  value={values.phone}
                  onChange={handleChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
                <div className="flex w-full">
                  <button className="w-36 h-14 bg-blue-200 rounded-md shadow-md cursor-pointer hover:bg-blue-400 " variant="contained" type="submit" disableElevation>
                    查询
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {orderList.length > 0 ? (
          <TableContainer className="px-6 my-4" component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>捐赠人</StyledTableCell>
                  <StyledTableCell>捐赠项目</StyledTableCell>
                  <StyledTableCell align="right">捐赠选项</StyledTableCell>
                  <StyledTableCell align="right">捐赠金额&nbsp;(元)</StyledTableCell>
                  <StyledTableCell align="right">捐赠时间&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderList.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.itemName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.optionId.length < 10 ? '任意捐' : `${row.optionId_dictText} X ${row.piece}`}</StyledTableCell>
                    <StyledTableCell align="right">{row.money}</StyledTableCell>
                    <StyledTableCell align="right">{row.createTime}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="m-auto">未查询到任何捐赠信息</div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Search
