import { GamesSection } from './games'
import { Highlight } from './Highlight'

export type ShowcaseUpcomingGames = {
  title: string | null
  highlight: Highlight | null
}

export type Showcase = {
  upcomingGames: ShowcaseUpcomingGames | null
}

export type UpcomingData = {
  upcomingGames: GamesSection[]
  showcase: Showcase | null
}

export type QueryUpcomingVariables = {
  date: any
}
