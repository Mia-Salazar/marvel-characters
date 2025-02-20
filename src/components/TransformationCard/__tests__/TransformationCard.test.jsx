import { render, screen } from '@testing-library/react';

import TransformationCard from '../TransformationCard';

describe('TransformationCard', () => {
  test('show transformation data', () => {
    render(
      <TransformationCard name="Goku" ki={10000} image="http://example.com" />
    );

    const cardName = screen.getByText(/goku/i);
    expect(cardName).toBeVisible();
  });
});
