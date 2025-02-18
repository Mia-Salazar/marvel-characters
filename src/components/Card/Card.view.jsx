import React from 'react';
import { useState } from 'react';

import FavoriteButton from '../FavoriteButton/FavoriteButton.view';

import './Card.styled.scss';

const Card = ({ name, image, id }) => {
  return (
    <li className="card">
      <button className="card__button">
        <figure className="card__container-img">
          <img alt="" src={image} className="card__img" />
        </figure>
      </button>

      <div className="card__name-container">
        <h2 className="card__name">{name}</h2>
        <FavoriteButton />
      </div>
    </li>
  );
};

export default Card;
