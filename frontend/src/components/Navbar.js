import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Navbar = ({ click }) => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const [dataw, setDataw] = useState([]);
    const [searchtxt, setSearchtxt] = useState("");
    const [suggest, setSuggest] = useState([]);
    const [resfound, setResfound] = useState(true);

    async function searchwrapper(key) {
        let data = [];
        let result = await fetch("http://localhost:8000/api/searchall/" + key);
        result = await result.json();

        for (var i = 0; i < result.length; i++) {
            data.push(result[i].name);
        }
        setDataw(data)
     
    }

    const handdlechange = (e) => {
        let searchval = e.target.value;
        searchwrapper(searchval);
        let suggestion = [];
        if (searchval.length > 0) {

            suggestion = dataw;
            setResfound(suggestion.length !== 0 ? true : false);
        }
        setSuggest(suggestion);
        setSearchtxt(searchval);

    }
    const suggestedText = (value) => {
        setSearchtxt(value);
        setSuggest([]);
    }

    const getSuggestion = () => {
        if (suggest.length === 0 && searchtxt !== "" && !resfound) {
            return <ul className="listul"><li className="listsug" >Search not fount</li></ul>
        } else {
            return (
                <ul className="listul">
                    {
                        suggest.map((item, index) => {
                            return (
                                <div key={index}>
                                    <li className="listsug" onClick={() => suggestedText(item)}>{item}</li>
                                    {index !== suggest.length - 1}
                                </div>
                            );
                        })
                    }
                </ul>
            )
        }
    }

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
                    <li>
                        <Link to="/addbook" className="accoun-link">
                            Add Book
                        </Link>
                    </li>


                </ul>
            </nav>
            <div className="search-continer">
                <div className="search-contents">
                    <select className="select" id="select">
                        <option value="1">All category</option>
                        <option value="2">Name of book</option>
                        <option value="3">Author</option>
                        <option value="4">ISBN</option>
                        <option value="4">Price</option>
                    </select>
                </div>
                <div className="search-content">
                    <div className="search-input" >
                        <input className="input-text" type="text" name="search" value={searchtxt} onChange={handdlechange} placeholder="search" />
                        {getSuggestion()}
                        <div className="icon" ><i className="fas fa-search"></i></div>
                    </div>
                </div>
                
            </div>
            <div className="search-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>

        </section>
    )
}

export default Navbar
