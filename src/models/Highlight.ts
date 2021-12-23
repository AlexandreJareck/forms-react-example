import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './enum'
import { Url } from './util'

export type Highlight = {
  title: string
  subtitle: string
  background: Url | null
  floatImage: Url | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}
