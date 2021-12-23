import {
  ENUM_COMPONENTPAGERIBBON_COLOR,
  ENUM_COMPONENTPAGERIBBON_SIZE
} from './enum'
import { Url } from './util'

export type BannerData = {
  image: Url | null
  title: string
  subtitle: string
  button: BannerButton | null
  ribbon: BannerRibbon | null
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
