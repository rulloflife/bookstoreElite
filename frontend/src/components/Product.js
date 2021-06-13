import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, name, price, description, productID }) => {
    
    return (
        <div className="product">
            <img  src={"http://localhost:8000/" + imageUrl} alt={name} />
            <div className="product-info">
                <p className="info-name">{name}</p>
                <p className="info-description">{description.substring(0, 100)}...</p> 
                <p className="info-price">$ {price}</p>
                <Link to={`/product/${productID}`} className="info-buttom">View</Link>
                
            </div>
        </div>
    )
}

export default Product
