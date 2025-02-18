import { useTransformations } from './TransformationList.hooks';
import { TransformationCard } from '..';

import './TransformationList.styled.scss';

const TransformationList = (transformations) => {
  if (transformations.transformations.length === 0)
    return <p>This character doesn't have transformations</p>;

  const orderedList = useTransformations(transformations.transformations);

  console.log(orderedList, 'orderedList');

  return (
    <ul className="transformation-list">
      {orderedList.map(({ image, ki, name, id }) => (
        <TransformationCard image={image} ki={ki} name={name} key={id} />
      ))}
    </ul>
  );
};

export default TransformationList;
