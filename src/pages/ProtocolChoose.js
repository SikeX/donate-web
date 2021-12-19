import Head from '../components/Head'
import Nav from '../components/Nav'
import MultipleSlider from '../components/MultipleSlider'
import Footer from '../components/Footer'
import ProtocolChooseTool from '../components/ProtocolChooseTool'
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from "react"
import protocolItem from "../services/protocolItem"
import ProtocolItem from '../components/ProtocolItem'
import Skeleton from '@mui/material/Skeleton';
import { Item } from 'react-grid-carousel'
import { MyContext } from '../context-manager'
import protocolClass from '../services/protocolClass'

const ProtocolChoose = () => {

    const [allItem, setAllItem] = useState([])

    const [total, setTotal] = useState(0)

    const [params, setParams] = useState({})

    const [allClass, setAllClass] = useState()



    useEffect(() => {
        const loadData = async() => {
            protocolItem.getAllItem(params).then((res) => {
                if (res.success) {
                    setTotal(res.result.total)
                    setAllItem(res.result.records)

                }
            })
        }
        loadData()
    }, [params])

    useEffect(() => {
        protocolClass.getAllClass().then((res) => {
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
        'protocolClass': allClass,
    }
    const changePage = (page) => {
        getParams({page: page})
    }

    return (
        <MyContext.Provider value={{setParams, getParams, paramMap,allClass}} >
            <div className='w-full'>
                <Head />
                <Nav />
                <ProtocolChooseTool getParams={getParams} />
                {allItem ? <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 md:px-16 my-3'>
                    {allItem.map((item) => <ProtocolItem
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        picture={item.picture}
                        itemDesc={item.itemDesc}
                        tag={false}
                    />)}
                    {/* <MultipleSlider /> */}
                </div> : <Skeleton animation="wave" variant="rectangular" width={800} height={118} />}
                <div className='flex mx-auto py-8 px-4'>
                    <div></div>
                    <Pagination onChange={(event,page) => getParams({pageNo: page})} sx={{ margin: "auto" }} count={Math.ceil(total/12)} color="primary" />
                </div>
                <Footer />
            </div>
        </MyContext.Provider>
    )
}

export default ProtocolChoose
