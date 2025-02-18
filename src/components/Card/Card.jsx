import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './Card.styled.scss';

const Types = {
  big: 'h1',
  medium: 'h2',
};

const Card = ({ name, description, image, id, isSingle, isList }) => {
  const HeadingType = isSingle ? 'h1' : 'h2';

  return (
    <article className={isSingle ? 'card card--is-single' : 'card'}>
      <Link to={`/characters/${id}`} className="card__button">
        <figure className="card__container-img">
          <img alt="" src={image} className="card__img" />
        </figure>
      </Link>

      <div className="card__name-container">
        <div className="card__name-header">
          <HeadingType className="card__name">{name}</HeadingType>
          <FavoriteButton isList={isList} />
        </div>
        {description && <p className="card__description">{description}</p>}
      </div>
    </article>
  );
};

export default Card;
