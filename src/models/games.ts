import { ENUM_GAME_RATING } from './enum'
import { NameString, Url } from './util'

export type Games = {
  title: string
  name: string
  developers: NameString[]
  cover: Url
  price: number
  slug: string
  short_description: string
  gallery: Gallery[]
  description: string
  release_date: any | null
  platforms: NameString[]
  publisher: NameString
  rating: ENUM_GAME_RATING | null
  categories: NameString[]
}

export type QueryGameBySlug = {
  games: Games[]
}

export type QueryGameBySlugVariables = {
  slug: string
}

export type Gallery = {
  src: string
  label: string | null
}

export type GamesSection = {
  name: string
  slug: string
  cover: Url | null
  developers: NameString[]
  price: number
}
