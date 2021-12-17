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
    
    const [total, setTotal] = useState(0)

    const [params, setParams] = useState({})

    const [allClass, setAllClass] = useState()

    // console.log(allClass)

    useEffect(() => {
        const loadData = async () => {
            donationItem.getAllItem(params).then((res) => {
                if (res.success) {
                    setTotal(res.result.total)
                    setAllItem(res.result.records)
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
                    // console.log(item)
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

    const changePage = (page) => {
        getParams({page: page})
    }

    return (
        <MyContext.Provider value={{setParams, getParams, paramMap, allClass}} >
            <div className='w-full'>
                <Head />
                <Nav />
                <DonateChooseTool getParams={getParams} />
                {allItem ? (<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-16 my-3'>
                    {allItem.map((item) => <DonateItem
                        key={item.id} 
                        id={item.id} 
                        title={item.name}
                        picture={item.picture}
                        targetMoney={item.targetMoney}
                        raisedMoney={item.raisedMoney}
                        itemDesc={item.itemDesc}
                        leastMoney={item.leastMoney}
                        tag={false}
                        />)}
                </div>) : (<Skeleton animation="wave" variant="rectangular" width={800} height={118} />)}
                <div className='flex mx-auto py-8 px-4'>
                    <div></div>
                    <Pagination onChange={(event,page) => getParams({pageNo: page})} sx={{ margin: "auto" }} count={Math.ceil(total/12)} color="primary" />
                </div>
                <Footer />
            </div>
        </MyContext.Provider>
    )
}

export default DonateChoose