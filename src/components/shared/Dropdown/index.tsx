import { useState } from 'react'
import { Container, Content, Title } from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container isOpen={isOpen}>
      <Title onClick={() => setIsOpen(!isOpen)}>{title}</Title>

      <Content aria-hidden={!isOpen}>{children}</Content>
    </Container>
  )
}

export default Dropdown
