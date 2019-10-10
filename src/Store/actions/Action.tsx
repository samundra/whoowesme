import { MONEY } from "./ActionType";

export function TrackMoney(money: number) {
  return {
    type: MONEY,
    payload: {
      Money: money
    }
  };
}
