import styled, { css } from 'styled-components'

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
