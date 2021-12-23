import { BannerData } from './banner'
import { GamesSection } from './games'
import { Highlight } from './Highlight'

export type HomeData = {
  banners: BannerData[]
  newGames: GamesSection[]
  upcomingGames: GamesSection[]
  freeGames: GamesSection[]
  sections: Sections | null
}

export type SectionsPopularGames = {
  title: string
  highlight: Highlight | null
  games: GamesSection[]
}

export type SectionsUpcomingGames = {
  title: string | null
  highlight: Highlight | null
}

export type SectionsFreeGames = {
  title: string | null
  highlight: Highlight | null
}

export type Sections = {
  newGames: SectionsNewGames | null
  popularGames: SectionsPopularGames | null
  upcomingGames: SectionsUpcomingGames | null
  freeGames: SectionsFreeGames | null
}

export type SectionsNewGames = {
  title: string | null
  highlight: Highlight | null
}
