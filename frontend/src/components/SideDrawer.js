import './SideDrawer.css'
import {Link} from 'react-router-dom';

const SideDrawer = ({show}) => {

    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer-link">
                <li>
                    <Link to="/">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        &nbsp; Home                      
                    </Link>
                </li>
                <li>
                    <Link >
                        <i class="fa fa-book" aria-hidden="true"></i>
                        &nbsp; Books
                    </Link>
                </li>
                <li>
                    <Link to="/favorite">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        &nbsp; Favorite
                    </Link>
                </li>
                <li>
                    <Link >
                        <i class="fa fa-user" aria-hidden="true"></i>                        
                        &nbsp; Accout
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        &nbsp; Cart
                    </Link>
                </li>
                <li>
                    <Link >
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        &nbsp; Contact
                    </Link>
                </li><li>
                    <Link >
                        <i class="fa fa-id-card" aria-hidden="true"></i>
                        &nbsp; About Us
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default SideDrawer;
