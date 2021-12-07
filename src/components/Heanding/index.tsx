import { ReactNode } from 'react'
import { Container } from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heanding = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </Container>
)

export default Heanding
