import { fetchPokemon } from "../utils/fetchPokemon";

const createRandomIds = () => {
  const ids = [];
  for (let i = 0; i < 4; i++) {
    const id = Math.floor(Math.random() * 898) + 1;
    ids.includes(id) ? ids.push(id + 1) : ids.push(id);
  }
  return ids;
};

const createRandomHand = async () => {
  const ids = createRandomIds();
  const hand = await Promise.all(ids.map((id) => fetchPokemon(id)));
  return hand;
};

export const roll = async (gameState) => {
  const hand1 = await createRandomHand();
  const hand2 = await createRandomHand();
  const totalExp1 = hand1.reduce(
    (acc, pokemon) => acc + pokemon.base_experience,
    0,
  );
  const totalExp2 = hand2.reduce(
    (acc, pokemon) => acc + pokemon.base_experience,
    0,
  );
  const point =
    totalExp1 < totalExp2 ? gameState.point + 1 : gameState.point - 1;
  console.log(point);
  const newHand = {
    hand1,
    hand2,
    totalExp1,
    totalExp2,
    point,
  };
  return newHand;
};