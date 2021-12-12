import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import donationItem from "../services/donationItem"
import StatusBar from "./StatusBar"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FILE_BASE_URL } from "../services/api";
import TabPanel from "./UI/TabPanel";
import { Link, useHistory } from "react-router-dom"


const Item = ({ name }) => {
    return (
        <div className='px-4 py-3 hover:bg-gray-400 cursor-pointer text-xl font-bold'>{name}</div>
    )
}


const Donate = ({id}) => {


    return (
        <div className='flex flex-col space-y-2 text-sm'>
            <div className='flex space-x-2'>
                <span className='my-auto'>选项：</span>
                <div className='px-2 py-1 border hover:border-red-500 hover:text-red-500'>任意捐</div>
            </div>
            <div className='flex'>
                <span className='my-auto'>money:</span>
                <form className='py-1 px-2'>
                    <input className='py-1 px-2 border focus:outline-none focus:border-blue-500' placeholder='money' />
                </form>
                <Link to={'/donate/order/'+id+'/123'} >
                <button className='border-2 border-red-500 hover:bg-red-300 focus:outline-none px-3 py-1'>立即捐赠</button>
                </Link>
            </div>
        </div>
    )
}

const DonateStatus = ({ id, title }) => {
    const [donateDone, setDonateDone] = useState(false)
    const [itemDetail, setItemDetail] = useState({})

    console.log(itemDetail)

    let history = useHistory()

    useEffect(() => {
        donationItem.getItemById(id).then((res) => {
            if (res.success) {
                setItemDetail(res.result)
            }
        })
    }, [])



    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full py-8 md:px-16 flex flex-col md:flex-row'>
                <div style={{ backgroundImage: 'url(' + FILE_BASE_URL + itemDetail.picture + ')' }} className='w-full h-0 md:w-1/2 md:h-auto pb-1/2 md:pb-0 flex-shrink-0 bg-gray-300 bg-cover'></div>
                <div className='flex flex-col flex-grow px-3 justify-start space-y-3'>
                    <span className='text-gray-500 text-sm'>{donateDone ? 'done' : 'funding'}</span>
                    <div className='text-2xl font-bold'>{itemDetail.name}</div>
                    <div className='text-sm text-gray-500'>值此毕业之际，我们向2021届毕业研究生发出倡议，“为母校留下一份礼物”。上海交通大学研究生会广泛征集同学意见，由毕业生设计并制作了2021届毕业生献礼—《星火》绕线画，125根根丝线从母校出发，象征着母校与毕业生之间的丝丝牵挂，而奔赴祖国山河大海的同学们则将牢记“饮水思源，爱国荣校”之校训，以钉钉子的精神扎根奋斗，在建设祖国的各条战线上发光发热。欢迎广大研究生同学以捐款形式共同参与，在离校之际把最美好的祝福送给母校。</div>
                    <StatusBar target={parseInt(itemDetail.targetMoney)} raised={parseInt(itemDetail.raisedMoney)} support={50} />
                    {!donateDone && <Donate id={id} />}
                    <div className='text-gray-500 text-sm'>{donateDone ? '项目已于2021-04-23 18:00结束众筹，感谢您的关注！' : '感谢您的大力支持，学校会认真负责地用好每一笔捐赠！'}</div>
                </div>
            </div>


            <div className='flex flex-col md:px-16 bg-gray-100 py-2 space-y-2'>
                <div className='flex bg-white'>
                    <Box sx={{ width: '90%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab sx={{ fontSize:16, fontWeight: 'bold' }} label="捐赠详情" />
                                <Tab sx={{ fontSize:16, fontWeight: 'bold' }} label="捐赠故事" />
                                <Tab sx={{ fontSize:16, fontWeight: 'bold' }} label="常见问题" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div dangerouslySetInnerHTML={{ __html: itemDetail.detail }}></div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div dangerouslySetInnerHTML={{ __html: itemDetail.story }}></div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div dangerouslySetInnerHTML={{ __html: itemDetail.question }}></div>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default DonateStatus