import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  //console.log(id, 'id');

  return <main className="home">hola</main>;
};

export default Detail;
