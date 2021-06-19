import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';

//screen
import HomeScreen from './view/HomeScreen';
import ProductScreen from './view/ProductScreen';
import Favorite from './view/Favorite';
import CartScreen from './view/CartScreen';
import Contact from './view/Contact';
import About from './view/About';
import Productcategory from './view/ProductCategory';
import Register from './components/form/Register';
import Login from './components/form/Login';
import AddBook from './view/AddBook';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';
import Success from './view/Success'
import Userprofile from './view/Userprofile'
import SearchList from './view/SearchList';


function App() {

  const [sideToggle, setsideToggle] = useState(false);

  return (
    <Router>
    <Navbar click={() => setsideToggle(true)} />
    <Backdrop show={sideToggle} click={() => setsideToggle(false)} />
    <SideDrawer show={sideToggle} click={() => setsideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/favorite" component={Favorite} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/productcategory" component={Productcategory} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/profile" component={Userprofile} />
          <Route exact path="/search/:key" component={SearchList} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
