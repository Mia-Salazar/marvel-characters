import React, { useEffect } from 'react';
import { useState } from 'react';

import { useSearchCharacterQuery } from '../../services/hooks/character';
import { Card, Search } from '../../components';

import './Home.styled.scss';
import { findCharacters } from '../../services/character';

const Home = () => {
  const { data, isLoading, error } = useSearchCharacterQuery();
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  const handleChangeName = async (event) => {
    const name = event.target.value;
    const filteredCharacters = await findCharacters(name);
    setName(name);
    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    if (data) {
      setCharacters(data.items);
    }
  }, [data]);

  return (
    <main className="home">
      <Search
        value={name}
        onChange={handleChangeName}
        number={characters?.length || 0}
      />
      <div className="home__list">
        {characters.map(({ name, image, id }) => (
          <Card name={name} id={id} image={image} key={id} isList />
        ))}
      </div>
    </main>
  );
};

export default Home;
