import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const SliderItem = ({name}) => {

    const color = 'bg-red-' + name + '00'

    const headStyle = 'w-full mx-auto h-80 md:h-96 text-white text-2xl ' + color
    

    return (
        <div className={headStyle}>
            {name}
        </div>
    )
}

const MySlider = () => {

    const [headImg, setHeadImg] = useState([1,2,3,4,5,6]);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Carousel className='w-full'
            swipeable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            customTransition='all .5 linear'
            transitionDuration={500}    
        >
            {headImg.map(item => <SliderItem name={item} /> )}
        </Carousel>
    )
}

export default MySlider