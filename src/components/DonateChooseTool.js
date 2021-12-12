const ClsItem = ({title}) => {
    return (
        <div className='bg-blue-100 hover:bg-blue-300 hover:text-blue-800 rounded-md cursor-pointer focus:bg-gray-300 px-5 py-1'>
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

const DonateChooseTool = () => {

    return (
        <div className='flex flex-col space-y-3 px-1 py-4 md:px-20'>
            <div className='text-2xl font-bold py-4'>捐赠项目选择</div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目类别:</div>
                <ClsItem title='全部' />
                <ClsItem title='校级' />
                <ClsItem title='院级' />
            </div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目分类:</div>
                <ClsItem title='全部' />
                <ClsItem title='奖学金' />
                <ClsItem title='科技创新' />
            </div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目类别:</div>
                <ClsItem title='全部' />
                <ClsItem title='校级' />
                <ClsItem title='院级' />
            </div>
            <div className='flex space-x-4 py-auto'>
                <div className='my-auto'>项目排序:</div>
                <ClsItem title='发布时间' />
                <ClsItem title='结束时间' />
                <ClsItem title='目标金额' />
                <ClsItem title='目标完成度' />
            </div>
        </div>
    )
}

export default DonateChooseTool