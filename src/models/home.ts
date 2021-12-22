export type HomeData = {
  banners: BannerData[]
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

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = 'normal',
  small = 'small'
}
