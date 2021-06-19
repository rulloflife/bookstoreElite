import './CartItem.css'
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="cartitem">
            <div className="cartitem-img">
                <img src={"http://localhost:8000/" + item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem-name" >
                <p>{item.name}</p>
            </Link>

            <p className="cartitem-price">${item.price}</p>

            <select className="cartitem-select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInstock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                ))}
            </select>

            <button className="cartitem-deleteBtn" onClick={() => removeHandler(item.product)}>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default CartItem;
