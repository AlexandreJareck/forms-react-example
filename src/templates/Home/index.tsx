import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { BannerProps } from 'components/shared/Banner'
import BannerSlider from 'components/shared/BannerSlider'
import { Container } from 'components/shared/Container'
import { GameCardProps } from 'components/shared/GameCard'
import GameCardSlider from 'components/shared/GameCardSlider'
import Heading from 'components/shared/Heading'
import Highlight, { HighlightProps } from 'components/shared/Highlight'
import {
  SectionBanner,
  SectionFooter,
  SectionFreeGames,
  SectionMostPopular,
  SectionNews,
  SectionUpcoming
} from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </SectionNews>

    <Container>
      <SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </SectionMostPopular>
    </Container>

    <Container>
      <SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} />
      </SectionUpcoming>
    </Container>

    <Container>
      <SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </SectionFreeGames>
    </Container>

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </section>
)

export default Home
