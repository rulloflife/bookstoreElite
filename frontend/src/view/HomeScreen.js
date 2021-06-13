import './HomeScreen.css';
import {Fragment, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Components
import Product from "../components/Product";
import Home from '../components/home/index';

//actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <Fragment>
        <Home />
        <div className="homescreen">
            <h2 className="homescreen-title">Latest Products</h2>
            <div className="homescreen-products">
                {loading ? (
                    <div className="loadinga">
                        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <span class="sr-only">Loading...</span>
                    </div>
                ) : error ? (
                    <h2>{error}</h2> 
                ) : (
                    products.map((product) => <Product 
                        key={Product.id} productid={Product.id} 
                        productID={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
        </Fragment>
    )
}

export default HomeScreen

