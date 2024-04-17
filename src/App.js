import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

function App() {
  const [items, setItems] = useState([]);
  const [currentGender, setCurrentGender] = useState('WOMEN')

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
      console.log(data)
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar setCurrentGender={setCurrentGender} />
        <Router>
          <Switch>
            <Route path="/">
              <Home currentGender={currentGender}/>
            </Route>
          </Switch>
        </Router>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
