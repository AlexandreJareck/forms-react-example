import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import Game, { GameTemplateProps } from 'templates/Game'
import gamesMock from 'components/shared/GameCardSlider/mock'
import highlightMock from 'components/shared/Highlight/mock'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'

import { GetStaticProps } from 'next'
import { QueryGameBySlug, QueryGameBySlugVariables } from 'models/games'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { RecommendedData } from 'models/recommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { QueryUpcomingVariables, UpcomingData } from 'models/upcoming'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGameBySlug>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  const { data: recommended } = await apolloClient.query<RecommendedData>({
    query: QUERY_RECOMMENDED
  })

  const TODAY = new Date().toISOString().slice(0, 10)

  const { data: upcoming } = await apolloClient.query<
    UpcomingData,
    QueryUpcomingVariables
  >({ query: QUERY_UPCOMING, variables: { date: TODAY } })

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended?.section?.games)
    }
  }
}
