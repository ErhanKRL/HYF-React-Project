import { fetchPokemon } from "../utils/fetchPokemon";

const createRandomIds = () => {
  const ids = [];
  for (let i = 0; i < 8; i++) {
    const id = Math.floor(Math.random() * 898) + 1;
    ids.push(id);
  }
  return ids;
};

const createRandomHand = async (hand1, hand2) => {
  const newHand1 = [...hand1];
  const newHand2 = [...hand2];
  const ids = createRandomIds();
  const set = await Promise.all(ids.map((id) => fetchPokemon(id)));
  for (let i = 0; i < 8; i++) {
    if (i < 4) {
      hand1[i].push(set[i]);
      hand1[i].shift();
    } else {
      hand2[i - 4].push(set[i]);
      hand2[i - 4].shift();
    }
  }
  return {
    newHand1,
    newHand2,
  };
};

export const roll = async ({ hand1, hand2 }) => {
  const { newHand1, newHand2 } = await createRandomHand(hand1, hand2);

  const newHand = {
    newHand1,
    newHand2,
  };
  return newHand;
};
