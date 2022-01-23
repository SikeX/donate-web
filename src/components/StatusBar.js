import { toMoney } from '../utils/dataProcess'

function StatusBar({
  raised, target, leftDay, support,
}) {
  // eslint-disable-next-line no-mixed-operators
  const rate = raised / target * 100

  console.log('rate is', rate)

  return (
    <div className="flex flex-col px-3 py-2 space-y-1 text-sm md:py-4 lg:py-6">
      <div className="flex space-x-1 justify-start items-center">
        <span className="font-bold">￥{toMoney(raised)}</span>
        <span className="text-gray-500 text-xs">已筹</span>
        <span className="flex-grow" />
        <span className="text-gray-500 my-auto">{rate.toFixed(2)}%</span>
      </div>
      <div className="w-full h-2  bg-blue-200 rounded-lg">
        <div style={{ width: `${rate}%` }} className="h-2 bg-blue-800 rounded-lg" />
      </div>
      <div className="flex justify-start items-center">
        <span>￥{toMoney(target)}</span>
        <span className="text-gray-500 text-xs px-1">目标</span>
        <span className="flex-grow" />
        <span>{support}</span>
        <span className="text-gray-500 text-xs">人支持</span>
      </div>
    </div>
  )
}

export default StatusBar
