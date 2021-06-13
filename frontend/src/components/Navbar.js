import './Navbar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = ({click}) => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        // NavBar 
    <section className="section-container">
        <div className="hamburger_menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav className="navbar">
            <ul className="nav-link">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="dropdown">
                    <Link to="/productcategory">
                        Books                                        
                    </Link>  
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/productcategory">
                                Manga                                         
                            </Link>                      
                        </li>
                        <li>
                            <Link to="/productcategory">
                                Math                                         
                            </Link>                       
                        </li>
                        <li>
                            <Link to="/productcategory">
                                History                                       
                            </Link>                             
                        </li>
                        <li>
                            <Link to="/productcategory">
                                Computer                                         
                            </Link>          
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact">
                        Contact                                         
                    </Link>  
                </li>
                <li>
                    <Link to="/about">
                        About                                         
                    </Link>                      
                </li>
                <li>
                    <Link to="/favorite" className="favorite-link">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <span>                            
                            <span className="favoritelogo_badge">0</span>
                        </span>                       
                    </Link>               
                </li>
                <li>
                    <Link to="/cart" className="cart-link">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>                            
                            cart
                            <span className="cartlogo_badge">{getCartCount()}</span>
                        </span>  
                    </Link>               
                </li>
                <li>
                    <Link to="/register" className="accoun-link">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>                                       
                    </Link>  
                </li>
            </ul>
        </nav>
        <div className="search-continer">
            <div className="search-content">
                <select className="select" id="select">
                    <option value="1">All category</option>
                    <option value="2">Name of book</option>
                    <option value="3">Author</option>
                    <option value="4">NSRP</option>
                </select>
            </div>
            <div className="search-content">
                <input type="text"name="search" className="input-text" placeholder="search"/>
                <button type="submit" className="btn-search">Search</button>
            </div> 
        </div>
        <div className="search-icon">
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
    </section>    
    )
}

export default Navbar
