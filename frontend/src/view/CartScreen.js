import './CartScreen.css'
import { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

//components
import CartItem from '../components/CartItem';

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => { }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  };

    const user = JSON.parse(localStorage.getItem('user-info'));
    let counts = JSON.parse(localStorage.getItem('count'));
    let count ;
    const formData = new FormData();
    console.log("Hellp ", formData)

    function helper(){
      for(let i = 0; i < cartItems.length; i++){
        
      formData.append('imageUrl', cartItems[i].imageUrl);      
      formData.append('name', cartItems[i].name);
      formData.append('user_id', user.id);
      formData.append('product_id', cartItems[i].product);
      formData.append('price', cartItems[i].price);
      formData.append('countInstock', cartItems[i].qty);
      formData.append('count', counts);

        addOrder();
      }
      
    }

  async function addOrder() { 
    
  
      let result = await fetch("http://localhost:8000/api/order", {
            method: 'POST',
            body: formData,
        });
     
}

  function opensweetalert()
  {
    Swal.fire({
      title: 'Order Success',
      text: "Thank You",
      type: 'success',
    })
    count = localStorage.setItem("count", JSON.stringify(counts + 1));
    helper();
  } 

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen-left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.products}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen-right">
          <div className="cartscreen-info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={opensweetalert} >Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
