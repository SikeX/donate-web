import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useHistory } from 'react-router-dom'
import { FILE_BASE_URL } from '../services/api'
import donationItem from '../services/donationItem'

function SliderItem({ url, id }) {
  // const color = 'bg-red-' + name + '00'

  const imgUrl = FILE_BASE_URL + url.split(',')[0]

  let history = useHistory()

  const toDetail = () => {
    history.push(`/detail/${id}`)
  }

  return (
    <div
      onClick={toDetail}
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="w-full h-0 pb-1/3 bg-blue-200 bg-cover cursor-pointer"
    />
  )
}

function MySlider() {
  const [headImg, setHeadImg] = useState([])

  useEffect(() => {
    donationItem.getBannerList().then((res) => {
      if (res.success) {
        console.log(res.result)
        setHeadImg(res.result)
      }
    })
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <Carousel
      className="w-full"
      itemClass="image-item"
      swipeable
      showDots
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      // customTransition='all .5 linear'
      transitionDuration={500}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {headImg.map((item) => (
        <SliderItem key={item.id} url={item.picture} id={item.id} />
      ))}
    </Carousel>
  )
}

export default MySlider
