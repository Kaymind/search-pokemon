import { useQuery } from '@apollo/client';
import { GET_POKEMON } from './../graphql/queries/pokemon';

interface PokemonProps {
  pokemonName?: string
}

export function usePokemon({ pokemonName = '' }: PokemonProps) {
  const queryResult = useQuery(GET_POKEMON, {
    variables: { name: pokemonName },
    skip: !pokemonName
  })

  return queryResult
}