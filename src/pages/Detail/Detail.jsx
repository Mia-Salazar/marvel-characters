import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { findCharacter } from '../../services/character';
import { DetailCard, TransformationList } from '../../components';

import './Detail.styled.scss';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await findCharacter(id);
      setCharacter(response);
    };

    fetchCharacters();
  }, []);

  return (
    <main className="detail">
      <DetailCard
        image={character.image}
        name={character.name}
        description={character.description}
        id={character.id}
        isSingle
      />
      <section className="detail__container">
        <h2 className="detail__title">Comics</h2>
        {character?.transformations && (
          <TransformationList transformations={character?.transformations} />
        )}
      </section>
    </main>
  );
};

export default Detail;
