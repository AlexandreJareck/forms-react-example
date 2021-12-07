import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should rend the heading', () => {
    render(
      <Main>
        <div></div>
      </Main>
    )

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
