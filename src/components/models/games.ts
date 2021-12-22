export type Games = {
  title: string
  name: string
  developers: Developers[]
  cover: Cover
  price: number
}

export type Developers = {
  name: string
}

export type Cover = {
  url: string
}
