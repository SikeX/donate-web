import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import order from '../services/order'

function DonationRecord(props) {
  const { id } = props
  const [recordList, setRecordList] = useState([])

  useEffect(() => {
    order.getOrdersByItemId(id).then((res) => {
      if (res.success) {
        setRecordList(res.result.records)
      } else {
        toast.error(res.message)
      }
    })
  }, [])

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

  return (
    <div className="donation-record">
      <Toaster />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>捐赠人</StyledTableCell>
              <StyledTableCell align="right">捐赠选项</StyledTableCell>
              <StyledTableCell align="right">捐赠金额&nbsp;(元)</StyledTableCell>
              <StyledTableCell align="right">捐赠时间&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recordList.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.optionId.length < 10 ? '任意捐' : `${row.optionId_dictText} X ${row.piece}`}</StyledTableCell>
                <StyledTableCell align="right">{row.money}</StyledTableCell>
                <StyledTableCell align="right">{row.createTime}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DonationRecord
