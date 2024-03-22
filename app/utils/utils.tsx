import axios from "axios";

const fetchPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
    return response.data.results;
  };

  export default fetchPokemons;