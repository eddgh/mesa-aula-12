import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h3>{data.name}</h3>
      <p>{data.tagline}</p>
      <img src={data.image_url} alt={`${data.name} Image`} />
      <div className="link">
        <Link to={`/beer/${data.id}`}>
          Detalhes
        </Link>
      </div>

    </div>
  );
};

export default Card;
