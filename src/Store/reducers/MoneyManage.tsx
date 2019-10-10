import { MONEY } from "../actions/ActionType";

export function MoneyManage(state: any = {}, action: any) {
  switch (action.type) {
    case MONEY:
      return action.payload.Money;
    default:
      return state;
  }
}
