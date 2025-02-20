import { describe, test, expect } from 'vitest';
import { useTransformations } from '../TransformationList.hooks';

const TRANSFORMATIONS = [
  {
    name: 'Fake Goku',
    ki: '1.000',
  },
  {
    name: 'Goku SSJ2',
    ki: '6 Billion',
  },
  {
    name: 'Goku SSJ3',
    ki: '24 Billion',
  },
  {
    name: 'Goku SSJ',
    ki: '3 Billion',
  },
];

describe('useTransformations', () => {
  test('should order elements', () => {
    const result = useTransformations(TRANSFORMATIONS);

    expect(result).toEqual([
      {
        name: 'Fake Goku',
        ki: '1.000',
      },
      {
        name: 'Goku SSJ',
        ki: '3 Billion',
      },
      {
        name: 'Goku SSJ2',
        ki: '6 Billion',
      },
      {
        name: 'Goku SSJ3',
        ki: '24 Billion',
      },
    ]);
  });
});
