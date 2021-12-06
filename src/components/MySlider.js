import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FILE_BASE_URL } from '../services/api'
import donationItem from '../services/donationItem'


const SliderItem = ({ url }) => {

  // const color = 'bg-red-' + name + '00'

  const headStyle = 'w-full mx-auto h-80 md:h-96 text-white text-2xl'

  const imgUrl = FILE_BASE_URL + url.split(',')[0]

  console.log(FILE_BASE_URL + url.split(',')[0])

  const heightStyle = {
    height: 0,
    paddingBottom: '40%',
  }


  return (
    <div className={headStyle} style={heightStyle}>
      <img src={imgUrl} />
    </div>
  )
}

const MySlider = () => {

  const [headImg, setHeadImg] = useState([]);


  useEffect(() => {
    donationItem.getAllItem().then((res) => {
      if (res.success) {
        console.log(res.result.records)
        setHeadImg(res.result.records)
      }
    })
  }, [])

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
      swipeable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      customTransition='all .5 linear'
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {headImg.map(item => <SliderItem url={item.picture} />)}
    </Carousel>
  )
}

export default MySlider