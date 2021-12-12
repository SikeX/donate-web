import Head from '../components/Head'
import Nav from '../components/Nav'
import MultipleSlider from '../components/MultipleSlider'
import Footer from '../components/Footer'
import DonateChooseTool from '../components/DonateChooseTool'
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from "react"
import donationItem from "../services/donationItem"
import DonateItem from '../components/DonateItem'
import Skeleton from '@mui/material/Skeleton';
import { Item } from 'react-grid-carousel'


const DonateChoose = () => {

    const [allItem, setAllItem] = useState([])

    donationItem.getAllItem()

    useEffect(() => {
        donationItem.getAllItem().then((res) => {
            if(res.success) {
                setAllItem(res.result.records)
                console.log(res.result.records)
            }
        })
    }, [])

    return (
        <div className='w-full'>
            <Head />
            <Nav />
            <DonateChooseTool />
            {allItem ? <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-16 my-3'>
                {allItem.map((item) => <DonateItem 
                    tag={false}
                    title={item.name}
                    picture={item.picture} />)}
                {/* <MultipleSlider /> */}
            </div> : <Skeleton variant="rectangular" width={210} height={118} />}
            <div className='flex mx-auto py-8 px-4'>
                <div></div>
                <Pagination sx={{margin: "auto"}} count={10} color="primary" />
            </div>
            <Footer />
        </div>
    )
}

export default DonateChoose