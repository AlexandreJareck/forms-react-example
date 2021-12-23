import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { GameQuery, QueryGamesVariables } from 'models/games'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int, $start: Int, $where: JSON, $sort: String) {
    games(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...GameFragment
    }

    gamesConnection(where: $where) {
      values {
        id
      }
    }
  }
  ${GameFragment}
`
export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      id
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`
export function useQueryGames(
  options?: QueryHookOptions<GameQuery, QueryGamesVariables>
) {
  return useQuery<GameQuery, QueryGamesVariables>(QUERY_GAMES, options)
}
