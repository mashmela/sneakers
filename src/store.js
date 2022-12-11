import { createStore } from "redux";

export const BAG_ITEMS_KEY = "sneakers";

function counterReducer(state = { sneakers: [], addblocks: [], bagItems: [] }, action) {
  switch (action.type) {
    case "SET_SNEAKERS":
      return { ...state, sneakers: action.sneakers };
    case "SET_ADDBLOCKS":
      return { ...state, addblocks: action.addblocks };
    case "ADD_BAG_ITEM": {
      const newItems = [...state.bagItems, action.item];
      localStorage.setItem(BAG_ITEMS_KEY, JSON.stringify(newItems));
      return { ...state, bagItems: newItems };
    }
    case "REMOVE_BAG_ITEM":
      const newItems = [...state.bagItems];
      newItems.splice(action.index, 1);
      localStorage.setItem(BAG_ITEMS_KEY, JSON.stringify(newItems));
      return { ...state, bagItems: newItems };
    case "SET_BAG_ITEMS":
      return { ...state, bagItems: action.items };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
