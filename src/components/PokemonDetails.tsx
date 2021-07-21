import styled from 'styled-components'
import { Pokemon } from '../models/Pokemon';
import { LoadingIndicator } from '../components/LoadingIndicator'

interface PokemonDetailsProps {
  className?: string,
  data: Pokemon,
  loading: boolean
  error: any
  searchName: string
  hasPokemon: boolean
  onSelectPokemonEvolution: (name: string) => void
}

const NotFound = styled(({ className }) => (
  <div className={className}>No pokemon name that you are searching...</div>
))`
  font-size: 20px;
  font-weight: bold;
  margin-top: 100px;
  text-align: center;
`

const Error = styled(({ className }) => (
  <div className={className}>Something went wrong...</div>
))`
  font-size: 20px;
  font-weight: bold;
  margin-top: 100px;
  text-align: center;
`

const Placeholder = styled(({ className }) => (
  <div className={className}>Please enter your favorite pokemon name</div>
))`
  font-size: 20px;
  font-weight: bold;
  margin-top: 100px;
  text-align: center;
`

function PokemonDetails({ className, searchName, data, loading, error, onSelectPokemonEvolution }: PokemonDetailsProps) {
  if(error) {
    return <Error />
  }

  if(!searchName) {
    return <Placeholder />
  }

  if(loading && !data) {
    return <LoadingIndicator />
  }

  if(!data) {
    return <NotFound />
  }

  return (
    <div className={className}>
      <div className="top-section">
        <div className="pokemon-picture">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="pokemon-details">
        <div className="name">
          <span className="hightlight">Name: </span> <span>{data.name}</span>
        </div>
        <div className="number">
          <span className="hightlight">Number: </span> <span>{data.number}</span>
        </div>
        <div className="classification">
          <span className="hightlight">Classification: </span> <span>{data.classification}</span>
        </div>
        <div className="fleeRate">
          <span className="hightlight">FleeRate: </span> <span>{data.fleeRate}</span>
        </div>
        <div className="weight">
          <span className="hightlight">Weight: </span> <span>min: {data.weight.minimum} / max: {data.weight.maximum}</span>
        </div>
        <div className="height">
          <span className="hightlight">Height: </span> <span>min: {data.height.minimum} / max: {data.height.maximum}</span>
        </div>
        <div className="resistant">
          <span className="hightlight">Resistant: </span> <span>{data.resistant.join(', ')}</span>
        </div>
        <div className="types">
          <span className="hightlight">Types: </span> <span>{data.types.join(', ')}</span>
        </div>
        <div className="weaknesses">
          <span className="hightlight">Weaknesses: </span> <span>{data.weaknesses.join(', ')}</span>
        </div>
        <div className="fast-attacks">
          <span className="hightlight">Fast Attacks: </span> <ul>{data.attacks.fast.map(attack => (<li key={attack.name}><span className="hightlight">name:</span> {attack.name} <span className="hightlight">type:</span> {attack.type} <span className="hightlight">damage:</span> {attack.damage}</li>))}</ul>
        </div>
        <div className="special-attacks">
          <span className="hightlight">Special Attacks: </span> <ul>{data.attacks.special.map(attack => (<li key={attack.name}><span className="hightlight">name:</span> {attack.name} <span className="hightlight">type:</span> {attack.type} <span className="hightlight">damage:</span> {attack.damage}</li>))}</ul>
        </div>
      </div>
      </div>
      <div className="bottom-section">
        <h2>Pokemon Evolutions</h2>
        {data.evolutions ? <div className="pokemon-evolutions">
          {data.evolutions?.map(ev => (
            <div className="detail" key={ev.name}>
              <div className="pokemon-picture">
                <img src={ev.image} alt={ev.name} />
              </div>
              <div className="pokemon-details">
                <div className="name">
                  <span className="hightlight">Name: </span> <span className="pokemon-name" onClick={() => onSelectPokemonEvolution(ev.name)}>{ev.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div> : <div className="no-data">No Data</div>}
      </div>
    </div>
  )
}

const StyledPokemonDetails = styled(PokemonDetails)`
  display: flex;
  flex-direction: column;
  border: 2px solid whitesmoke;
  border-radius: 20px;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
  padding: 20px 20px;
  margin-top: 20px;

  .top-section {
    display: flex;
    margin-top: 20px;
    

    > div {
      flex-basis: 100%;
    }

    > .pokemon-picture {
      
      text-align: center;

      h1 {
        margin: 0px;
      }
    }

    > .pokemon-details {
      .hightlight {
        font-weight: bold;
      }
    }
  }

  .bottom-section {
    margin-top: 20px;
    text-align: center;

    > h2 {
      color: crimson;
    }

    > .pokemon-evolutions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      > .detail {
        border: 1px solid whitesmoke;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
        width: calc(33.33% - 20px);
        margin: 10px;

        .pokemon-picture {
          width: 100%;
          min-height: 350px;
          max-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }

        .pokemon-details {
          border-top: 3px solid lightgrey;
          padding: 10px 20px;

          > .name > .pokemon-name {
            cursor: pointer;
            &:hover {
              color: crimson;
            } 
          }
        }
      }
    }

    > .no-data {
      font-size: 20px;
      font-weight: bold;
    }
  }

  ul {
    margin: 0;
  }
`

export { StyledPokemonDetails as PokemonDetails }