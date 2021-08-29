import Carousel from 'react-grid-carousel'
import SlickItem from './slickItem'

const MySlider = () => {

    return (
        <Carousel className='w-full' cols={1} rows={1} gap={5} showDots loop>
            <Carousel.Item>
                <div className='w-full mx-auto h-80 bg-blue-300 text-white text-2xl'>
                    1
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='w-full mx-auto h-80 bg-red-300 text-white text-2xl'>
                    2
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='w-full mx-auto h-80 bg-yellow-300 text-white text-2xl'>
                    3
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default MySlider