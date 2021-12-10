import Link from 'next/link'
import { Container, Description, Image as ImgStyle, Title } from './styles'
import Button from 'components/shared/Button/index'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <Container>
    <ImgStyle
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <Title>{title}</Title>
    <Description>{description}</Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </Container>
)

export default Empty
