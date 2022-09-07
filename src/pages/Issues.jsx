import { useHistory } from 'react-router-dom'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Head from '../components/Head'
import Footer from '../components/Footer'
import issues from '../services/issues'

function Issues() {
  const [issuesList, setIssuesList] = useState([])

  useEffect(() => {
    issues.getAllIssues().then((res) => {
      console.log(res.result.records)
      if (res.success) {
        setIssuesList(res.result.records)
      }
    })
  }, [])

  return (
    <div className="w-full h-screen flex flex-col">
      <Head />
      <Nav />
      <div className="flex-grow flex flex-col bg-gray-200">
        {issuesList.map((item) => (
          <Accordion className="px-10" key={item.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="font-bold text-red-700">{item.title}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>{item.content}</div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Issues
