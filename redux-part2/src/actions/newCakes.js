import { BUY_NEWCAKE } from "./types";

export const buyNewCake = (number = 1) => {
  return {
    type: BUY_NEWCAKE,
    payload: number,
  };
};
