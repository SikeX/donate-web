import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DonateItem from './DonateItem'
import donationItem from '../services/donationItem'

function DonateClass({ id, name }) {
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    donationItem.getItemsByClassId(id).then((res) => {
      if (res.success) {
        console.log(res.result.slice(0, 4))
        setItemList(res.result.slice(0, 4))
        console.log(itemList)
      }
    })
  }, [])

  return (
    <div className="w-full flex flex-col space-y-2 py-2">
      <div className="w-full flex justify-between">
        <div className="font-bold">{name}</div>
        <Link to="/donate"><button type="button" className="hover:underline">more{'>'}{'>'}</button></Link>
      </div>
      <div className="bg-blue-700 w-full h-1" />
      <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-center space-y-2 lg:space-x-6 xl:space-x-8 py-1">
        {itemList.map((item, index) => (
          <DonateItem
            key={item.id}
            tag
            id={item.id}
            title={item.name}
            picture={item.picture}
            targetMoney={item.targetMoney}
            raisedMoney={item.raisedMoney}
            itemDesc={item.itemDesc}
          />
        ))}
      </div>
    </div>
  )
}

export default DonateClass
