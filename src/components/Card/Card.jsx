import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './Card.styled.scss';

const Card = ({ name, description, image, id, isList }) => {
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
          <FavoriteButton isList={isList} />
        </div>
        {description && <p className="card__description">{description}</p>}
      </div>
    </article>
  );
};

export default Card;
