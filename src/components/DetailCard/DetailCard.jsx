import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './DetailCard.styled.scss';

const DetailCard = ({ name, description, image, id }) => {
  return (
    <article className="card-detail">
      <div className="card-detail__container">
        <Link to={`/characters/${id}`} className="card-detail__button">
          <figure className="card-detail__container-img">
            <img alt="" src={image} className="card-detail__img" />
          </figure>
        </Link>

        <div className="card-detail__name-container">
          <div className="card-detail__name-header">
            <h1 className="card-detail__name">{name}</h1>
            <FavoriteButton item={{ name, description, image, id }} />
          </div>
          {description && (
            <p className="card-detail__description">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default DetailCard;
