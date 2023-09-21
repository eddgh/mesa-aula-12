import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const res = await fetch('https://api.punkapi.com/v2/beers');
      if (!res.ok) {
        throw new Error(`Failed to fetch beer data: ${res.statusText}`);
      }
      const data = await res.json();
      setBeers(data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    getBeers();
  }, [])

  return (
    <div className='grid'>
      {beers.length
        ?
        beers.map((beer) => (
          <Card key={beer.id} data={beer} />
        ))
        : null}
    </div>
  );
};

export default Home;
