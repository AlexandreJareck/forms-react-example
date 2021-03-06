import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Empty from 'components/shared/Empty'
import ExploreSidebar, { ItemProps } from 'components/shared/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/shared/GameCard'
import { Grid } from 'components/shared/Grid'
import { useQueryGames } from 'graphql/queries/games'
import { Games } from 'models/games'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import Base from 'templates/Base'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { Main, ShowMore, ShowMoreButton, ShowMoreLoading } from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  if (!data) return <p>Loading...</p>

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  return (
    <Base>
      <Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    id={game.id}
                    key={game.slug}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover!.url}`}
                    price={game.price}
                  />
                ))}
              </Grid>
              {hasMoreGames && (
                <ShowMore>
                  {loading ? (
                    <ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </ShowMoreButton>
                  )}
                </ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with this filter"
              hasLink
            />
          )}
        </section>
      </Main>
    </Base>
  )
}

export default GamesTemplate
