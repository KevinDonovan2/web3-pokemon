import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import fetchPokemons from '../utils/utils';

interface Pokemon {
  name: string;
  url: string;
}

const ServerPage: React.FC = async () => {
  // Fetch data on server-side
  const pokemons = await fetchPokemons(); // Call the utility function


  return (
    <div>
      <h1>Liste des Pokémons</h1>
      <ul>
        {pokemons.map((pokemon: Pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/server/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerPage;