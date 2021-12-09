import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Block = styled.div``

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`
export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`
