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
import { MyContext } from '../context-manager'
import donationClass from '../services/donationClass'

const DonateChoose = () => {

    const [allItem, setAllItem] = useState([])

    const [params, setParams] = useState({})

    const [allClass, setAllClass] = useState()

    console.log(allClass)

    useEffect(() => {
        const loadData = () => {
            donationItem.getAllItem(params).then((res) => {
                if (res.success) {
                    setAllItem(res.result.records)
                    console.log(res.result.records)
                }
            })
        }
        loadData()
    }, [params])

    useEffect(() => {
        donationClass.getAllClass().then((res) => {
            if(res.success) {
                const classMap = {}
                res.result.records.map((item) => {
                    console.log(item)
                    classMap[[item.name]] = item.id
                })
                setAllClass(classMap)
            }
        })
    }, [])

    const getParams = (newParam) => {
        console.log(newParam)
        setParams({ ...params, ...newParam })
    }

    const paramMap = {
        'category':{
            '校级': 1,
            '院级': 2,
        },
        'donationClass': allClass,
    }

    return (
        <MyContext.Provider value={{setParams, getParams, paramMap}} >
            <div className='w-full'>
                <Head />
                <Nav />
                <DonateChooseTool getParams={getParams} />
                {allItem ? <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-16 my-3'>
                    {allItem.map((item) => <DonateItem
                        tag={false}
                        title={item.name}
                        picture={item.picture} />)}
                    {/* <MultipleSlider /> */}
                </div> : <Skeleton variant="rectangular" width={210} height={118} />}
                <div className='flex mx-auto py-8 px-4'>
                    <div></div>
                    <Pagination sx={{ margin: "auto" }} count={10} color="primary" />
                </div>
                <Footer />
            </div>
        </MyContext.Provider>
    )
}

export default DonateChoose