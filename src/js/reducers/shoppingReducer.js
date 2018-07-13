import { SHOPPING_ITEM } from "../constants/action-types";

const shoppingReducer = (state = [], action) => {
  switch (action.type) {
    case SHOPPING_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default shoppingReducer;