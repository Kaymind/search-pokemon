import styled from 'styled-components'
import { TextField } from '../../components/TextField'
import { PokemonDetails } from '../../components/PokemonDetails'

import { Pokemon } from '../../models/Pokemon'


interface HomePageProps {
  className?: string
  data: Pokemon
  loading: boolean
  error: any
  hasPokemon: boolean
  name: string
  searchName: string
  onChangeName: (name: string) => void
  onSelectPokemonEvolution: (name: string) => void
}

function HomePage({
  className,
  data,
  loading,
  error,
  hasPokemon,
  name,
  searchName,
  onChangeName,
  onSelectPokemonEvolution
}: HomePageProps) {
  return (
    <div className={className}>
      <TextField value={name} placeholder='Search for your favorite pokemon' onChange={event => onChangeName(event.target.value)} />
      <PokemonDetails searchName={searchName} data={data} loading={loading} hasPokemon={hasPokemon} error={error} onSelectPokemonEvolution={onSelectPokemonEvolution} />
    </div>
  )
}

const StyledHomePage = styled(HomePage)``

export { StyledHomePage as HomePage}