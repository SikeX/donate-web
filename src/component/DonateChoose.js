const ClsItem = ({title}) => {
    return (
        <div className='hover:bg-gray-200 cursor-pointer focus:bg-gray-300 px-2 py-2'>
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

const DonateChoose = () => {
    return (
        <div className='flex flex-col space-y-3 px-1 md:px-16'>
            <ChooseItem name='项目分类:' />
            <ChooseItem name='项目分类:' />
            <ChooseItem name='项目分类:' />
            <ChooseItem name='项目分类:' />
        </div>
    )
}

export default DonateChoose