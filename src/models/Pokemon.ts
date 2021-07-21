export interface Weight {
  minimum: string;
  maximum: string;
}

export interface Height {
  minimum: string;
  maximum: string;
}

export interface Fast {
  name: string;
  type: string;
  damage: string;
}

export interface Special {
  name: string;
  type: string;
  damage: string;
}

export interface Attacks {
  fast: Fast[];
  special: Special[];
}

export interface Evolution {
  number: string;
  name: string;
  weight: Weight;
  height: Height;
  classification: string;
  types: string[];
  resistant: string[];
  attacks: Attacks;
  weaknesses: string[];
  fleeRate: string;
  maxCP: string;
  evolutions: Evolution[];
  image: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: Weight;
  height: Height;
  classification: string;
  types: string[];
  resistant: string[];
  attacks: Attacks;
  weaknesses: string[];
  fleeRate: string;
  maxCP: string;
  maxHP: string;
  evolutions: Evolution[];
  image: string;
}

export function transformPokemon(data: any): Pokemon | null{
  if(data.pokemon) {
    return {
      id: data.pokemon.id,
      name: data.pokemon.name,
      number: data.pokemon.number,
      weight: {
        minimum: data.pokemon.weight.minimum,
        maximum: data.pokemon.weight.maximum
      },
      height: {
        minimum: data.pokemon.height.minimum,
        maximum: data.pokemon.height.maximum
      },
      maxCP: data.pokemon.maxCP,
      maxHP: data.pokemon.maxHP,
      resistant: data.pokemon.resistant,
      types: data.pokemon.types,
      weaknesses: data.pokemon.weaknesses,
      image: data.pokemon.image,
      fleeRate: data.pokemon.fleeRate,
      classification: data.pokemon.classification,
      attacks: {
        fast: data.pokemon.attacks.fast,
        special: data.pokemon.attacks.special
      },
      evolutions: data.pokemon.evolutions
    }
  } 
  return null
}