import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { usePokemon } from '../../hooks/usePokemon'
import { useDebouncedState } from '../../hooks/useDebouncedState';
import { useQueryParams } from '../../hooks/useQueryParams';
import { transformPokemon } from '../../models/Pokemon'

interface HomePageProps {}

export function withHomePage(Component: React.FC<HomePageProps>) {
  function WithHomePage() {
    const [name, setName]: any = useQueryParams('name')
    const [searchName, setSearchName]: any = useDebouncedState(name, 500)

    const { data, loading, error} = usePokemon({ pokemonName: searchName || ''})
    const transformData = !loading && data ? transformPokemon(data) : null

    function onSelectPokemonEvolution(name: string) {
      setName(name)
      setSearchName(name)
    }

    const pageProps = {
      data: transformData,
      loading,
      error,
      hasPokemon: Boolean(data),
      name,
      searchName,
      onChangeName: setName,
      onSelectPokemonEvolution
    }

    return <Component {...pageProps} />
  }

  hoistNonReactStatics(WithHomePage, Component)

  WithHomePage.displayName = `withHomePage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`

  return WithHomePage
}