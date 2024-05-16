import React, { memo } from "react";
import { removeFromCart, changeCartQty } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(changeCartQty({ id, quantity }));
  };

  return (
    <>
      <Cart
        cartItems={cartItems}
        handleRemoveItem={handleRemoveItem}
        handleQuantityChange={handleQuantityChange}
      />
    </>
  );
};

export default memo(CartContainer) ;
