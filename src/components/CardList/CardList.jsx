import React from 'react';

import Card from '../Card/Card';
import Search from '../Search/Search';

import './CardList.styled.scss';

const CardList = ({ characters, name, onChangeName, isFavorite }) => {
  console.log(characters, 'aaaa');
  return (
    <div className="list">
      <Search
        value={name}
        onChange={onChangeName}
        number={characters?.length || 0}
        isFavorite={isFavorite}
      />
      <section className="list__container">
        {characters?.map(({ name, image, id, description }) => (
          <Card
            name={name}
            id={id}
            image={image}
            key={id}
            description={description}
            isList
          />
        ))}
      </section>
    </div>
  );
};

export default CardList;
