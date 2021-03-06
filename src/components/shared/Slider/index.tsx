import { forwardRef, ForwardRefRenderFunction } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import { Container } from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <Container>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </Container>
)

export default forwardRef(Slider)
