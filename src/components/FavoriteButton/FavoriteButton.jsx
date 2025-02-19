import React from 'react';

import HeartFull from '../../assets/heart.svg';
import HeartEmpty from '../../assets/heart-light.svg';

import './FavoriteButton.styled.scss';

const FavoriteButton = ({ hasNumber, isList }) => {
  return (
    <button className="favorite">
      <figure
        className={
          isList
            ? 'favorite__img-container favorite__img-container--is-list'
            : 'favorite__img-container'
        }
      >
        <img alt="" src={HeartEmpty} className="favorite__img" />
      </figure>
      {hasNumber && <span className="favorite__favorite-number">0</span>}
    </button>
  );
};

export default FavoriteButton;
