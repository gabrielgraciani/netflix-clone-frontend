import { render } from '@testing-library/react';

import { MovieRowSkeleton } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

describe('MovieRowSkeleton Component', () => {
  it('should render correctly', () => {
    const { container } = render(<MovieRowSkeleton />, {
      wrapper: WrapperWithStyledComponents,
    });
    expect(container).toBeTruthy();
  });
});
