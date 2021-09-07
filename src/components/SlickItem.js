import Carousel from 'react-grid-carousel'

const SlickItem = ({name}) => {
    return (
        <Carousel.Item>
            <span className='w-full mx-auto h-80 bg-blue-300 text-white text-2xl'>
                {name}
            </span>
        </Carousel.Item>
    )
}

export default SlickItem