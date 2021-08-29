const FootItem = ({title}) => {
    return (
        <span className='my-auto px-4 cursor-pointer hover:underline'>{title}</span>
    )
}


const Footer = () => {
    return (
        <div className='flex flex-col w-full bg-red-800 mt-8 divide-y-2 divide-red-900 text-white text-sm'>
            <div className='flex divide-x-2 divide-red-900 justify-center py-6'>
                <FootItem title='关于我们' />
                <FootItem title='关于我们' />
                <FootItem title='关于我们' />
                <FootItem title='关于我们' />
            </div>
            <div className='py-6 mx-auto'>
                版权所有©哈尔滨工程大学校友会
            </div>
        </div>
    )
}

export default Footer