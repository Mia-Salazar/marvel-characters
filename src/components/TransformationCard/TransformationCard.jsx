import './TransformationCard.styled.scss';

const TransformationCard = ({ image, ki, name }) => {
  return (
    <li className="transformation-card">
      <figure className="transformation-card__img-container">
        <img src={image} alt="" className="transformation-card__img" />
      </figure>
      <h3 className="transformation-card__title">{name}</h3>
      <h4 className="transformation-card__subtitle">{ki}</h4>
    </li>
  );
};

export default TransformationCard;
