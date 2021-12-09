import Heading from '../Heading'
import { Container } from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <Container>
    {!!title && (
      <Heading lineLeft lineColor="primary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </Container>
)

export default TextContent
