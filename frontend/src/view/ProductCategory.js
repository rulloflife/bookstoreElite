import './ProductCategory.css'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

//componets
import Product from "../components/Product";
//actions
import { getProducts as listProducts } from '../redux/actions/productActions';
    
const ProductCategory = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="productCategory">
            <div className="productCategory-left">
                <h3>Category</h3>
                <ul>                    
                    <li>
                        <a href="#">Manga</a>
                    </li>
                    <li>
                        <a href="#">Math</a>
                    </li>
                    <li>
                        <a href="#">History</a>
                    </li>
                    <li>
                        <a href="#">Computer</a>
                    </li>
                </ul>
            </div>     
            <div>
                <div>
                    <div className="productCategory-right">
                        {loading ? (
                            <div className="loading">
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
            </div>
        </div>
    )
}

export default ProductCategory;
