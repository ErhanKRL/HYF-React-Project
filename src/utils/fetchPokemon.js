export const fetchPokemon = async (pokemonId) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
  const data = await res.json();
  const { id, name, base_experience, types } = data;
  const type = types[0].type.name;
  return {
    id,
    name,
    type,
    base_experience,
  };
};
