import { render } from '@testing-library/react';

import { FeatureMovieSkeleton } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

describe('FeatureMovieSkeleton Component', () => {
  it('should render correctly', () => {
    const { container } = render(<FeatureMovieSkeleton />, {
      wrapper: WrapperWithStyledComponents,
    });
    expect(container).toBeTruthy();
  });
});
