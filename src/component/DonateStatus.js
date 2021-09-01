const Item = ({name}) => {
    return(
        <div className='px-4 py-3 hover:bg-gray-400 cursor-pointer text-xl font-bold'>{name}</div>
    )
}

const DonateStatus = ({title}) => {
    return (
        <div className='flex flex-col'>
            <div className='w-full px-2 py-3 md:px-16 flex'>
                <div className='flex-shrink-0 w-80 h-80 bg-gray-300'></div>
                <div className='flex flex-col flex-grow px-2 justify-evenly'>
                    <div className='text-xl font-bold'>test</div>
                    <div className='text-sm text-gray-500'>值此毕业之际，我们向2021届毕业研究生发出倡议，“为母校留下一份礼物”。上海交通大学研究生会广泛征集同学意见，由毕业生设计并制作了2021届毕业生献礼—《星火》绕线画，125根根丝线从母校出发，象征着母校与毕业生之间的丝丝牵挂，而奔赴祖国山河大海的同学们则将牢记“饮水思源，爱国荣校”之校训，以钉钉子的精神扎根奋斗，在建设祖国的各条战线上发光发热。欢迎广大研究生同学以捐款形式共同参与，在离校之际把最美好的祝福送给母校。</div>
                    <div className='flex flex-col w-full space-y-2 border-t-2 border-b-2 my-2'>
                        <div>target</div>
                        <div className='bg-red-700 w-full h-3'></div>
                        <div> total</div>
                    </div>
                    <div>项目已于2021-04-23 18:00结束众筹，感谢您的关注！</div>
                </div>            
            </div>
            <div className='flex flex-col md:px-16 bg-gray-100 py-2 space-y-2'>
                <div className='flex bg-white'>
                    <Item name='项目详情' />
                    <Item name='具体事项' />
                    <Item name='捐赠回馈' />
                    <Item name='捐赠鸣谢' />
                </div>
                <div className='h-96 flex-grow bg-white'>

                </div>
            </div>
        </div>
    )
}

export default DonateStatus