import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import protocolItem from '../services/protocolItem'

function ProtocalOutcome(props) {
  const { id } = props

  const [outcomeList, setOutcomeList] = useState([])

  useEffect(() => {
    protocolItem.getOutcome(id).then((res) => {
      if (res.success) {
        setOutcomeList(res.result.records)
      } else {
        toast(res.message)
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>支出类别</StyledTableCell>
              <StyledTableCell align="right">支出详情&nbsp;</StyledTableCell>
              <StyledTableCell align="right">支出金额&nbsp;(元)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {outcomeList.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.reimburseCategory_dictText}
                </StyledTableCell>
                <StyledTableCell align="right">{row.detail}</StyledTableCell>
                <StyledTableCell align="right">{parseFloat(row.money / 100)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProtocalOutcome
