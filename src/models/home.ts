import { Cover, Developers } from './games'

export type HomeData = {
  banners: BannerData[]
  newGames: NewGames[]
  upcomingGames: UpcomingGames[]
  freeGames: FreeGames[]
}

export type BannerData = {
  image: BannerImage | null
  title: string
  subtitle: string
  button: BannerButton | null
  ribbon: BannerRibbon | null
}

export type BannerImage = {
  url: string
}

export type BannerButton = {
  label: string
  link: string
}

export type BannerRibbon = {
  text: string | null
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null
}

export interface NewGames {
  name: string
  slug: string
  cover: Cover | null
  developers: Developers[]
  price: number
}

export type UpcomingGames = {
  name: string
  slug: string
  cover: Cover | null
  developers: Developers[]
  price: number
}

export type FreeGames = {
  name: string
  slug: string
  cover: Cover | null
  developers: Developers[]
  price: number
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = 'normal',
  small = 'small'
}
