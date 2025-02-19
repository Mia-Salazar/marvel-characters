import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './Card.styled.scss';

const Card = ({ name, description, image, id }) => {
  return (
    <article className="card">
      <Link to={`/characters/${id}`} className="card__button">
        <figure className="card__container-img">
          <img alt="" src={image} className="card__img" />
        </figure>
      </Link>

      <div className="card__name-container">
        <div className="card__name-header">
          <h2 className="card__name">{name}</h2>
          <FavoriteButton
            isList={true}
            item={{ name, description, image, id }}
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
