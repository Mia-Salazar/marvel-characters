import React from 'react';
import { useState } from 'react';

import MarvelImage from '../../assets/marvel.svg';
import HeartImage from '../../assets/heart.svg';

import './Header.styled.scss';

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <header className="header">
      <figure className="header__img-container">
        <img alt="Marvel" src={MarvelImage} />
      </figure>
      <button className="header__favorite">
        <figure className="header__img-container">
          <img alt="" src={HeartImage} />
        </figure>
        <span className="header__favorite-number">0</span>
      </button>
    </header>
  );
};

export default Header;
