import './ProductScreen.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Actions
import { getProductDetails} from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = ({match, history}) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if(product && match.params.id !== product.id) {
            
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product.id, qty));
        history.push(`/cart`);
    }
    //const numberArray = product.countInstock;

    return (
        <div className="productscreen">
            {loading ? (
                <div className="loadingb">
                    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>
                </div>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen-left">
                    <div className="left-img">
                        <img src={ "http://127.0.0.1:8000/" + product.imageUrl} alt={product.name} />
                    </div>
                    <div className="left-info">
                        <p className="left-name">{product.name}</p>
                        <p>Price: $ {product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                </div>
                <div className="productscreen-right">
                    <div className="right-info">
                        <p>
                            Price: <span>${product.price}</span>
                        </p>
                        <p>
                            Status: <span>{product.countInstock > 0 ? "In Stock" : "Out Stock"}</span>
                        </p>
                        <p>
                            Qty:
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInstock).keys()].map((x) => (
                                    <option key={x + 1} value={x+1}>{x + 1}</option>                                    
                                ))}
                            </select>
                        </p>
                        <p>
                            <button type="button" onClick={addToCartHandler}>Add to Cart</button>
                        </p>
                    </div>
                </div>
                </>
            )}      
        </div>
    )
};

export default ProductScreen;
