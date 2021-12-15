import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Select = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
  `}
`

// export const Select = styled.select`
//   width: 100%;
//   height: 35px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;
// `
