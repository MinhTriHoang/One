import React, { useState } from 'react';
import SearchResults from './components/SearchResults';
import Booking from './components/Booking';

function App() {
  // Dummy data for search results
  const [results] = useState([
    { name: 'Hotel A', price: 100 },
    { name: 'Hotel B', price: 200 },
  ]);

  return (
    <div className="App">
      <h1>BOOKING-ONLINE</h1>
      <SearchResults results={results} />
      <Booking />
    </div>
  );
}

export default App;
