import React from 'react';
import { useState } from 'react';

import { useSearchCharacterQuery } from '../../services/hooks/character';
import { Card } from '../../components';

import './Home.styled.scss';

const Home = () => {
  const [count, setCount] = useState(0);

  const characterQuery = useSearchCharacterQuery();

  console.log(characterQuery.data, 'aaaa');

  return (
    <main className="home">
      <h1 className="home__title">
        {characterQuery.data?.items.length} Results
      </h1>
      <ul className="home__list">
        {characterQuery.data?.items.map(({ name, image, id }) => (
          <Card name={name} id={id} image={image} key={id} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
