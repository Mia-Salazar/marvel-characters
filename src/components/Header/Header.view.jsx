import React from 'react';
import { useState } from 'react';

import MarvelImage from '../../assets/marvel.svg';
import HeartImage from '../../assets/heart.svg';

import './Header.styled.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton.view';

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <header className="header">
      <figure className="header__img-container">
        <img alt="Marvel" src={MarvelImage} />
      </figure>
      <FavoriteButton hasNumber />
    </header>
  );
};

export default Header;
