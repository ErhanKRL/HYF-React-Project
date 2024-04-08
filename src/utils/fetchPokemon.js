export const fetchPokemon = async (pokemonId) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    if (!res.ok) {
      throw new Error("Error fetching Pokemon");
    }
    const data = await res.json();
    const { id, name, base_experience, types } = data;
    const type = types[0].type.name;
    return {
      id,
      name,
      type,
      base_experience,
    };
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    throw error;
  }
};
