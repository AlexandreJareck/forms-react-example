import { Highlight } from './Highlight'
import { GamesSection } from './games'

export type RecommendedSection = {
  title: string
  highlight: Highlight | null
  games: GamesSection[]
}

export type Recommended = {
  section: RecommendedSection | null
}

export type RecommendedData = {
  recommended: Recommended | null
}
