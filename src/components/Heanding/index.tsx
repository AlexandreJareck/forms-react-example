import { ReactNode } from 'react'
import { Container } from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
}

const Heanding = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'small'
}: HeadingProps) => (
  <Container
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
  >
    {children}
  </Container>
)

export default Heanding
