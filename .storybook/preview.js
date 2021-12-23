import React from 'react';
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

import {CartContext, CartContextDefaultValues} from 'hooks/use-cart'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
          value={{
            ...CartContextDefaultValues,
            ...(context?.args?.cartContextValue || {}),
            ...context.args
          }}
        >
        <Story />
        <GlobalStyles removeBg/>
      </CartContext.Provider>
    </ThemeProvider>
  ),
];
