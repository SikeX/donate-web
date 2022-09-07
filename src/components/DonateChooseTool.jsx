import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import donationClass from '../services/donationClass'
import { searchParamsState } from '../state/state'

function SearchItem(props) {
  const {
    id, type, title,
  } = props

  let history = useHistory()

  const [searchParams, setSearchParams] = useRecoilState(searchParamsState)

  const focus = searchParams[type] === id ? 'bg-blue-300' : 'bg-blue-100'

  const style = ` hover:bg-blue-300 hover:text-blue-800  rounded-md cursor-pointer px-5 py-1 flex-shrink-0 ${focus}`

  const handleClick = () => {
    setSearchParams({ ...searchParams, [type]: id })
  }

  return (
    <div
      aria-hidden="true"
      className={style}
      onClick={handleClick}
    >
      {title}
    </div>
  )
}

function DonateChooseTool() {
  const [allClass, setAllClass] = useState([])

  useEffect(() => {
    donationClass.getAllClass().then((res) => {
      if (res.success) {
        setAllClass(res.result.records)
      }
    })
  }, [])

  return (
    <div className="flex flex-col text-sm md:text-base space-y-3 px-1 py-4 md:px-20">
      <div className="text-2xl font-bold py-4">捐赠项目选择</div>
      <div className="flex space-x-3 py-auto">
        <div className="my-auto">项目状态:</div>
        <SearchItem id="" type="status" title="全部" />
        <SearchItem id="1" type="status" title="正在众筹" />
        <SearchItem id="0" type="status" title="已结束" />
      </div>
      <div className="flex space-x-3 py-auto overflow-auto">
        <div className="my-auto flex-shrink-0">项目分类:</div>
        <SearchItem id="" type="donationClass" title="全部" />
        {allClass.map((item) => <SearchItem key={item.id} id={item.id} type="donationClass" title={item.name} />)}
      </div>
      <div className="flex space-x-3 py-auto">
        <div className="my-auto">项目类别:</div>
        <SearchItem id="" type="category" title="全部" />
        <SearchItem id="1" type="category" title="校级" />
        <SearchItem id="2" type="category" title="院级" />
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
