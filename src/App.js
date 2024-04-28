import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import Shop from './pages/Shop/Shop';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Cart from './pages/Cart/Cart';
import { useCartContext } from './hooks/useCartContext';
import Form from './pages/Form/Form';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

function App() {
  const [items, setItems] = useState([]);
  const [currentGender, setCurrentGender] = useState('MEN');
  const [hamburgerOn, setHamburgerOn] = useState(false)

  const [currentProducts, setCurrentProducts] = useState('')
  const [currentSizes, setCurrentSizes] = useState('')
  const [currentColors, setCurrentColors] = useState('')

  const {cart, dispatch} = useCartContext()

  console.log('cart', cart)

  useEffect(() => {
    getItems();
  }, []);


  async function getItems() {
    try {
      const { data, error } = await supabase.from("e-commerce-items").select();
      if (error) {
        throw error;
      }
      setItems(data);
      console.log('fetched',data);
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }
  }

  return (
    <Router>
      <div className="App">
        <BottomNavbar 
          hamburgerOn = { hamburgerOn } 
          setHamburgerOn = { setHamburgerOn }
          setCurrentGender = { setCurrentGender }
        />
        
        <Switch>
          <Route exact path="/">
            <Navbar setCurrentGender={setCurrentGender} />
            <Home currentGender={currentGender} />
          </Route>

          <Route exact path="/shop/:id">
            { items && <ItemDetails items={ items }/> }
          </Route>

          <Route exact path="/shop">
            { items && <Shop 
              hamburgerOn = { hamburgerOn }
              items = { items }
              setItems = { setItems }
              currentGender = { currentGender }
              currentProducts = { currentProducts }
              currentSizes = { currentSizes }
              currentColors = { currentColors }
            /> }
          </Route>

          <Route exact path="/cart">
            <Cart items={ items }/>
          </Route>

          <Route exact path="/buy">
            <Form />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
