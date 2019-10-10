import { INCOME, EXPENSES } from "../actions/ActionType";

export function TrackMoney(state: any = {}, action: any) {
  switch (action.type) {
    case INCOME:
      return state.Money + action.payload.Money;
    case EXPENSES:
      return state.Money - action.payload.Money;
    default:
      return state;
  }
}
