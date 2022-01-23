import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context-manager'
import protocolClass from '../services/protocolClass'

function ClsItem({
  label, title, paramState, getFocusComp,
}) {
  const { setParams, getParams, paramMap } = useContext(MyContext)

  // console.log(paramState[[label]].find(item => item.name == title))

  const [isFocus, setIsFocus] = useState(paramState[[label]].find((item) => item.name == title).focus)

  useEffect(() => {
    setIsFocus(paramState[[label]].find((item) => item.name == title).focus)
  }, [paramState])

  const style = isFocus ? 'bg-blue-300 hover:bg-blue-300 hover:text-blue-800 rounded-md cursor-pointer px-5 py-1'
    : 'bg-blue-100 hover:bg-blue-300 hover:text-blue-800 focus:bg-blue-800 rounded-md cursor-pointer px-5 py-1'

  console.log(getParams)

  console.log(`这里${paramMap}`)

  const pushParam = () => {
    console.log(getParams)
    getFocusComp({ label, name: title })

    if (title === '全部') {
      getParams({ [label]: '' })
    } else {
      getParams({ [label]: paramMap[label][title] })
    }
  }

  return (
    <div
      className={style}
      onClick={pushParam}
    >
      {title}
    </div>
  )
}

function ProtocolChooseTool() {
  const [focusComp, setFocusComp] = useState({})

  const [allClass, setAllClass] = useState([])

  const [paramState, setParamState] = useState({
    protocolClass: [{ name: '全部', focus: true },
      { name: '奖学金', focus: false },
      { name: '助学金', focus: false },
      { name: '科技创新基金', focus: false },
      { name: '社会实践基金', focus: false },
      { name: '创业就业基金', focus: false }],
    /* category: [
            { name: '全部', focus: true },
            { name: '校级', focus: false },
            { name: '院级', focus: false }
        ] */
  })

  const classParamState = []

  const getFocusComp = (comp) => {
    const newParamObj = paramState
    const newParam = paramState[[comp.label]].map((item) => {
      let tmp = {}
      tmp.name = item.name
      if (item.name == comp.name) {
        tmp.focus = true
      } else {
        tmp.focus = false
      }
      return tmp
    })
    console.log(newParam)
    // console.log({...paramState, ...newParamObj})
    newParamObj[[comp.label]] = newParam
    console.log({ ...paramState, ...newParamObj })
    setParamState({ ...paramState, ...newParamObj })
  }

  useEffect(() => {
    protocolClass.getAllClass().then((res) => {
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

  return (
    <div className="flex flex-col space-y-3 px-1 py-4 md:px-20">
      <div className="text-2xl font-bold py-4">协议项目选择</div>
      {/* <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目类别:</div>
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='category' title='全部' />
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='category' title='校级' />
                <ClsItem getFocusComp={getFocusComp} paramState={paramState} label='category' title='院级' />
            </div> */}
      <div className="flex space-x-4 py-auto">
        <div className="my-auto">项目分类:</div>
        <ClsItem getFocusComp={getFocusComp} paramState={paramState} label="protocolClass" title="全部" />
        {allClass.map((item) => <ClsItem getFocusComp={getFocusComp} paramState={paramState} label="protocolClass" title={item.name} />)}
      </div>

    </div>
  )
}

export default ProtocolChooseTool
