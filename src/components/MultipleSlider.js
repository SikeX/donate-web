import Carousel from 'react-grid-carousel'
import DonateItem from './DonateItem'

function MultipleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    rows: 2,
    slidesToShow: 4,
    slidesPerRow: 4,
  }
  return (
    <Carousel
      cols={4}
      rows={1}
      gap={10}
      responsiveLayout={
        [
          {
            breakpoint: 768,
            cols: 1,
            rows: 4,
          }
        ]
      }
      mobileBreakpoint={300}
      loop
    >
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
      <Carousel.Item>
        <DonateItem tag={false} title="1" />
      </Carousel.Item>
    </Carousel>
  )
}

export default MultipleSlider
