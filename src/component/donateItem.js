const DonateItem = ({tag, title}) => {

    const defaultStyle = 'flex md:flex-col flex-shrink-0 md:flex-shrink md:h-96 border shadow-md hover:shadow-2xl rounded-md transition transform hover:-translate-y-1 cursor-pointer my-1 w-full'

    const test = tag ? defaultStyle + ' md:w-1/4' : defaultStyle
    
    return (
        <div className={test}>
            <div className='w-36 md:w-full md:h-1/2 bg-red-200'></div>
            <div className='flex flex-col flex-grow divide-y-2 divide-dotted'>
                <div className='flex flex-col py-1 px-4'>
                    <div className='text-gray-400 text-sm'>筹集中</div>
                    <div className='pb-4 hover:underline' >{title}</div>
                </div>
                
                <div className='flex flex-col px-3 py-2 space-y-1'>
                    <div className='flex justify-between'>
                        <span>目标</span>
                        <span>筹款中</span> 
                    </div>
                    <div className='w-full h-2 px-2 bg-red-700 rounded-md'></div>
                    <div className='flex justify-between'>
                        <span>共筹</span>
                        <span>支持数</span>
                        <span>完成度</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateItem