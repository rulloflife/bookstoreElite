import { Link } from 'react-router-dom'
import '../components/Product.css'
import { useState ,useEffect} from 'react';
import { withRouter } from 'react-router-dom';

function SearchList(props) {
    const [data, setData] = useState([]);
    const key = props.match.params.key;
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/searchall/" + key)
        result = await result.json();
        setData(result)        
    })
    
    let description = data.description;
    
    return (
        <div className="product">
            <img  src={"http://localhost:8000/" + data.imageUrl} alt={data.name} />
            <div className="product-info">
                <p className="info-name">{data.name}</p>
                <p className="info-description">{description}</p> 
                <p className="info-price">$ {data.price}</p>
                <Link to={`/product/${data.id}`} className="info-buttom">View</Link>
                
            </div>
        </div>
    )
}

export default withRouter(SearchList)
