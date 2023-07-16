import { useDispatch, useSelector } from "react-redux";
import CartPageComponent from "./components/CartPageComponent";
import { addToCart,removeFromCart } from "../redux/actions/cartActions";



const CartPage = () => {

const cartItems = useSelector((state)=>state.cart.cartItems)
const cartSubtotal=useSelector((state) => state.cart.cartSubtotal)

const reduxDispatch=useDispatch();

  return <CartPageComponent addToCart={addToCart} cartItems={cartItems} cartSubtotal={cartSubtotal} 
  reduxDispatch={reduxDispatch} removeFromCart={removeFromCart}/>
};

export default CartPage;
 