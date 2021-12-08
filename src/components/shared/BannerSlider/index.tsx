import Banner, { BannerProps } from 'components/shared/Banner'
import { SliderSettings } from '../Slider'
import { Container } from './styles'
import Slider from 'components/shared/Slider'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <Container>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </Container>
)

export default BannerSlider
