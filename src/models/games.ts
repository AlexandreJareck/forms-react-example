export type Games = {
  title: string
  name: string
  developers: Developers[]
  cover: Cover
  price: number
  slug: string
  short_description: string
  gallery: Gallery[]
  description: string
  release_date: any | null
  platforms: Plataforms[]
  publisher: Publisher
  rating: ENUM_GAME_RATING | null
  categories: Categories[]
}

export type Developers = {
  name: string
}

export type Cover = {
  url: string
  src?: string
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

export type Plataforms = {
  name: string
}

export type Publisher = {
  name: string
}

export type Categories = {
  name: string
}

export enum ENUM_GAME_RATING {
  BR0 = 'BR0',
  BR10 = 'BR10',
  BR12 = 'BR12',
  BR14 = 'BR14',
  BR16 = 'BR16',
  BR18 = 'BR18'
}
