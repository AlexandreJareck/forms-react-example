import { BannerProps } from 'components/shared/Banner'
import BannerSlider from 'components/shared/BannerSlider'
import { Container } from 'components/shared/Container'
import { GameCardProps } from 'components/shared/GameCard'
import { HighlightProps } from 'components/shared/Highlight'
import Showcase from 'components/shared/Showcase'
import { useSession } from 'next-auth/react'
import Base from 'templates/Base'
import { SectionBanner, SectionNews, SectionUpcoming } from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
  newGamesTitle: string
  mostPopularGamesTitle: string
  upcomingGamesTitle: string
  freeGamesTitle: string
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth,
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  freeGamesTitle
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <SectionBanner>
          <BannerSlider items={banners} />
        </SectionBanner>
      </Container>

      <SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Container>
        <SectionUpcoming>
          <Showcase title={upcomingGamesTitle} games={upcomingGames} />
          <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
        </SectionUpcoming>
      </Container>

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighligth}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
