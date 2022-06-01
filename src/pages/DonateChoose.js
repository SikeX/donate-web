import Pagination from '@mui/material/Pagination'
import { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Item } from 'react-grid-carousel'
import { useLocation, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Head from '../components/Head'
import Nav from '../components/Nav'
import MultipleSlider from '../components/MultipleSlider'
import Footer from '../components/Footer'
import DonateChooseTool from '../components/DonateChooseTool'
import donationItem from '../services/donationItem'
import DonateItem from '../components/DonateItem'
import donationClass from '../services/donationClass'
import { searchParamsState } from '../state/state'

function DonateChoose() {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const classId = useQuery().get('classId')
  const status = useQuery().get('status')
  const pageNo = useQuery().get('pageNo')
  const category = useQuery().get('category')

  const [searchParams, setSearchParams] = useRecoilState(searchParamsState)

  const [allItem, setAllItem] = useState([])

  const [total, setTotal] = useState(-1)

  useEffect(() => {
    if (classId === null && status === null && pageNo === null && category === null) {
      setSearchParams({
        donationClass: '', status: '', pageNo: 1, category: '',
      })
    } else {
      setSearchParams({ ...searchParams, donationClass: classId })
    }
  }, [classId])

  useEffect(() => {
    donationItem.getAllItem(searchParams).then((res) => {
      if (res.success) {
        setTotal(res.result.total)
        setAllItem(res.result.records)
      }
    })
  }, [searchParams])

  return (
    <div className="w-full">
      <Head />
      <Nav />
      <DonateChooseTool />
      {total > 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-16 my-3">
          {allItem.map((item) => (
            <DonateItem
              key={item.id}
              id={item.id}
              title={item.name}
              picture={item.picture}
              targetMoney={item.targetMoney}
              raisedMoney={item.raisedMoney}
              itemDesc={item.itemDesc}
              leastMoney={item.leastMoney}
              tag={false}
            />
          ))}
        </div>
      )} {total === -1 && (
        <div className="px-2 md:px-16 my-3 flex flex-col space-y-2">
          <Skeleton animation="wave" variant="rectangular" />
          <Skeleton animation="wave" variant="rectangular" />
          <Skeleton animation="wave" variant="rectangular" />
        </div>
      )}
      {total === 0 && (
        <div className="px-2 md:px-16 my-3 flex flex-col space-y-2">
          <div className="m-auto">暂无项目</div>
        </div>
      )}
      <div className="flex mx-auto py-8 px-4">
        <div />
        <Pagination onChange={(event, page) => setSearchParams({ ...searchParams, pageNo: page })} sx={{ margin: 'auto' }} count={Math.ceil(total / 12)} color="primary" />
      </div>
      <Footer />
    </div>
  )
}

export default DonateChoose
