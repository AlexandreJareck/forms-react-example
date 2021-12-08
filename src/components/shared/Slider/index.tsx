import SlickSlider, { Settings } from 'react-slick'
import { Container } from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <Container>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </Container>
)

export default Slider
