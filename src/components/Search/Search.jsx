import React from 'react';

import SearchImage from '../../assets/search.svg';

import './Search.styled.scss';

const Search = ({ number, value, onChange }) => {
  return (
    <form className="search">
      <div className="search__input-container">
        <label className="search__label" htmlFor="search">
          Search a character
        </label>
        <figure className="search__img-container">
          <img alt="" src={SearchImage} />
        </figure>
        <input
          className="search__input"
          id="name"
          type="text"
          name="search"
          placeholder="Search a character..."
          value={value}
          onChange={(event) => onChange(event)}
        />
      </div>
      <h1 className="search__title">{number} Results</h1>
    </form>
  );
};

export default Search;
