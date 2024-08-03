export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    },
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });
};

export const updateQuantity = (id, quantity) => (dispatch) => {
  dispatch({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  });
};
