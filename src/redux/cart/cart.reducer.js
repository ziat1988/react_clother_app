const INITIAL_STATE = {
  cartDropDown: false, // state ban dau false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log("reducer trong cart", action.payload);
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        cartDropDown: !state.cartDropDown,
      };

    default:
      return state;
  }
};

export default cartReducer;
