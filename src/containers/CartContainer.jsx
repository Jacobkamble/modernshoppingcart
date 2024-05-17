import React, { memo } from "react";
import { removeFromCart, changeCartQty, clearCart } from "../redux/features/cartSlice";
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

  const handleClearCart=()=>{
    dispatch(clearCart())
  }

  return (
    <>
      <Cart
        cartItems={cartItems}
        handleRemoveItem={handleRemoveItem}
        handleQuantityChange={handleQuantityChange}
        handleClearCart={handleClearCart}
      />
    </>
  );
};

export default memo(CartContainer) ;
