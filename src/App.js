import { createClient } from '@supabase/supabase-js';
import './App.css';
import { useEffect, useState } from 'react';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

function App() {
  const [items, setItems] = useState([]);

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
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
