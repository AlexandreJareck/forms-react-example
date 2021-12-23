import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSidebar, { ItemProps } from 'components/shared/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/shared/GameCard'
import { Grid } from 'components/shared/Grid'
import { useQueryGames } from 'graphql/queries/games'
import { Games } from 'models/games'
import Base from 'templates/Base'
import { Main, ShowMore } from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  const handleFilter = () => {
    return
  }

  if (!data) return <p>Loading...</p>

  return (
    <Base>
      <Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {data?.games.map((game: Games) => (
              <GameCard
                key={game.slug}
                title={game.name}
                slug={game.slug}
                developer={game.developers[0].name}
                img={`http://localhost:1337${game.cover!.url}`}
                price={game.price}
              />
            ))}
          </Grid>

          <ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </ShowMore>
        </section>
      </Main>
    </Base>
  )
}

export default GamesTemplate
