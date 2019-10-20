export function addToCart(product) {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}
