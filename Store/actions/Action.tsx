import { NETMONEY } from "./ActionType";

export function TrackMoney(money: number) {
  return {
    type: NETMONEY,
    payload: {
      Money: money
    }
  };
}
