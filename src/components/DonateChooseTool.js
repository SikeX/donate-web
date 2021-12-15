import { useContext, useState } from "react"
import { MyContext } from "../context-manager"


const ClsItem = ({label, title}) => {
    
    const { setParams, getParams, paramMap } = useContext(MyContext)
    
    const [isFocus, setIsFocus] = useState(false)

    console.log(getParams)

    console.log('这里'+paramMap)


    const pushParam = () => {
        console.log(getParams)
        setIsFocus(true)
        if (title === '全部'){
            getParams({[label]:''})
        } else {
            getParams({[label]:paramMap[label][title]})   
        }
    }

    return (
        <div  
            className='bg-blue-100 hover:bg-blue-300 hover:text-blue-800 focus:bg-blue-800 rounded-md cursor-pointer px-5 py-1'
            onClick={pushParam}>
            {title}
        </div>
    )
}

const ChooseItem = ({name}) => {
    return (
        <div className='flex border px-3 rounded-md shadow-md space-x-3'>
            <span className='py-2'>{name}</span>
            <ClsItem title='haha' />
            <ClsItem title='hah' />
            <ClsItem title='ha' />
            <ClsItem title='h' />
        </div>
    )
}

const DonateChooseTool = ({}) => {

    return (
        <div className='flex flex-col space-y-3 px-1 py-4 md:px-20'>
            <div className='text-2xl font-bold py-4'>捐赠项目选择</div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目类别:</div>
                <ClsItem label='category'  title='全部' />
                <ClsItem label='category'  title='校级' />
                <ClsItem label='category'  title='院级' />
            </div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目分类:</div>
                <ClsItem label='donationClass'  title='全部' />
                <ClsItem label='donationClass'  title='奖学金' />
                <ClsItem label='donationClass'  title='助学金' />
                <ClsItem label='donationClass'  title='科技创新基金' />
                <ClsItem label='donationClass'  title='社会实践基金' />
            </div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目排序:</div>
                <ClsItem label='createTime' title='发布时间'  />
                <ClsItem label='endTime' title='结束时间'  />
                <ClsItem label='targetMoney' title='目标金额'  />
                <ClsItem label='' title='目标完成度'  />
            </div>
        </div>
    )
}

export default DonateChooseTool