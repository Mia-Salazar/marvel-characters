import { useTransformations } from './TransformationList.hooks';
import { TransformationCard } from '..';

import './TransformationList.styled.scss';

const TransformationList = ({ transformations }) => {
  if (transformations.length === 0)
    return <p>This character doesn't have transformations</p>;

  const orderedList = useTransformations(transformations);
  const firstElements = orderedList.slice(0, 20);

  return (
    <ul className="transformation-list">
      {firstElements.map(({ image, ki, name, id }) => (
        <TransformationCard image={image} ki={ki} name={name} key={id} />
      ))}
    </ul>
  );
};

export default TransformationList;
