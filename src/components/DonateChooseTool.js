import { useContext, useState, useEffect } from "react"
import { MyContext } from "../context-manager"
import donationClass from "../services/donationClass"


const ClsItem = ({ label, title, paramState, getFocusComp }) => {

    const { setParams, getParams, paramMap } = useContext(MyContext)

    console.log(paramState[[label]].find(item => item.name == title))

    const [isFocus, setIsFocus] = useState(paramState[[label]].find(item => item.name == title).focus)

    useEffect(() => {
        setIsFocus(paramState[[label]].find(item => item.name == title).focus)
    }, [paramState])


    const style = isFocus ? 'bg-blue-300 hover:bg-blue-300 hover:text-blue-800 rounded-md cursor-pointer px-5 py-1' : 'bg-blue-100 hover:bg-blue-300 hover:text-blue-800 focus:bg-blue-800 rounded-md cursor-pointer px-5 py-1'

    console.log(getParams)

    console.log('这里' + paramMap)

    const pushParam = () => {
        console.log(getParams)

        getFocusComp({label: label, name: title})
        // const newParam = paramState[[label]].map((item) => {
        //     if (item.name == title) {
        //         item.focus = true
        //     } else {
        //         item.focus = false
        //     }
        // })
        // setParamState(...paramState, ...newParam)
        if (title === '全部') {
            getParams({ [label]: '' })
        } else {
            getParams({ [label]: paramMap[label][title] })
        }
    }

    return (
        <div
            className={style}
            onClick={pushParam}>
            {title}
        </div>
    )
}

// const ChooseItem = ({ name }) => {
//     return (
//         <div className='flex border px-3 rounded-md shadow-md space-x-3'>
//             <span className='py-2'>{name}</span>
//             <ClsItem title='haha' />
//             <ClsItem title='hah' />
//             <ClsItem title='ha' />
//             <ClsItem title='h' />
//         </div>
//     )
// }

const DonateChooseTool = ({ }) => {

    const [focusComp, setFocusComp] = useState({})

    const [allClass, setAllClass] = useState([])

    const [paramState, setParamState] = useState({
        donationClass: [{ name: '全部', focus: true },
        { name: '奖学金', focus: false },
        { name: '助学金', focus: false },
        { name: '科技创新基金', focus: false },
        { name: '社会实践基金', focus: false },
        { name: '创业就业基金', focus: false }],
        category: [
            { name: '全部', focus: true },
            { name: '校级', focus: false },
            { name: '院级', focus: false }
        ]
    })

    const classParamState = []

    // const initParamState = {
    //     donationClass: [{ name: '全部', focus: true },
    //     { name: '', focus: false },
    //     { name: '奖学金', focus: false },
    //     { name: '助学金', focus: false },
    //     { name: '科技创新基金', focus: false },
    //     { name: '社会实践基金', focus: false },],
    //     category: [
    //         { name: '全部', focus: true },
    //         { name: '校级', focus: false },
    //         { name: '院级', focus: false }
    //     ]
    // }

    const getFocusComp = (comp) => {
        const newParamObj = paramState
        const newParam = paramState[[comp.label]].map((item) => {
            let tmp = {}
            tmp.name = item.name
            if(item.name == comp.name) {
                tmp.focus = true
            } else {
                tmp.focus = false
            }
            return tmp
        })
        console.log(newParam)
        // console.log({...paramState, ...newParamObj})
        newParamObj[[comp.label]] = newParam
        console.log({...paramState, ...newParamObj})
        setParamState({...paramState, ...newParamObj})
    }

    useEffect(() => {
        donationClass.getAllClass().then((res) => {
            if (res.success) {
                // res.result.records.map((item) => {
                //     item['focus'] = false
                //     classParamState.push(item)
                // })
                // classParamState.push({ name: '全部', focus: true })
                // console.log(classParamState)
                setAllClass(res.result.records)
            }
        })
    }, [])

    // useEffect(() => {
    //     setParamState(initParamState)
    // }, [])

    return (
        <div className='flex flex-col space-y-3 px-1 py-4 md:px-20'>
            <div className='text-2xl font-bold py-4'>捐赠项目选择</div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目类别:</div>
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='category' title='全部' />
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='category' title='校级' />
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='category' title='院级' />
            </div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目分类:</div>
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='donationClass' title='全部' />
                {allClass.map((item) => <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='donationClass' title={item.name} />)}
            </div>
            {/* <div className='flex space-x-4 py-auto'>
                    <div className='my-auto'>项目排序:</div>
                    <ClsItem getFocusComp={getFocusComp} focusComp={focusComp} label='createTime' title='发布时间' />
                    <ClsItem getFocusComp={getFocusComp} focusComp={focusComp} label='endTime' title='结束时间' />
                    <ClsItem getFocusComp={getFocusComp} focusComp={focusComp} label='targetMoney' title='目标金额' />
                    <ClsItem getFocusComp={getFocusComp} focusComp={focusComp} label='' title='目标完成度' />
                </div> */}
        </div>
    )
}

export default DonateChooseTool