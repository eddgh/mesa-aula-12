import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const navigate = useNavigate();

  const getBeer = async () => {
    try {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch beer data: ${res.statusText}`);
      }
      const data = await res.json();
      if (data.length > 0) {
        const beerData = data[0];
        setBeer(beerData);
      } else {
        throw new Error(`Beer not found with ID: ${id}`);
      }
    } catch (error) {
      console.error('Error fetching beer:', error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [id]);

  const goBack = () => {
    navigate('/home');
  };

  return (
    <div className='beer'>
      {beer && (
        <>
          <div className='card nothover'>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt='beer image' title={`${beer.name} beer image`}/>
            <p>{beer.tagline}</p>
            <button onClick={goBack}>Voltar</button>
          </div>
          <p><strong>Description:</strong>{beer.description}</p>
          <p><strong>Brewers tips:</strong>{beer.brewers_tips}</p>
        </>
      )}
    </div>
  );
};

export default Beer;
