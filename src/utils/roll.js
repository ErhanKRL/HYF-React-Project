import { fetchPokemon } from "../utils/fetchPokemon";

const createRandomIds = () => {
  const ids = [];
  for (let i = 0; i < 4; i++) {
    const id = Math.floor(Math.random() * 898) + 1;
    ids.push(id);
  }
  return ids;
};

const createRandomHand = async () => {
  const hand = [];
  for (let i = 0; i < 4; i++) {
    const ids = createRandomIds();
    const set = await Promise.all(ids.map((id) => fetchPokemon(id)));
    hand.push(set);
  }
  return hand;
};

export const roll = async () => {
  const hand1 = await createRandomHand();
  const hand2 = await createRandomHand();

  const newHand = {
    hand1,
    hand2,
  };
  return newHand;
};
