import { BannerData } from 'models/banner'
import { Games, GamesSection } from 'models/games'
import { Highlight } from 'models/Highlight'
import formatPrice from './format-price'

export const bannerMapper = (banners: BannerData[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (games: GamesSection[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      id: game.id,
      title: game.name,
      slug: game.slug,
      developer: game.developers[0].name,
      img: `http://localhost:1337${game.cover?.url}`,
      price: game.price
    }))
  )
}

export const highlightMapper = (highlight: Highlight | null | undefined) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`,
      floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}

export const cartMapper = (games: Games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `http://localhost:1337${game.cover?.url}`,
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}
