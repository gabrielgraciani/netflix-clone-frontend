import { render, fireEvent } from '@testing-library/react';

import { Header } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';
import theme from '../../styles/theme';

describe('Header Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />, {
      wrapper: WrapperWithStyledComponents,
    });

    expect(container).toBeTruthy();
  });

  it('should background stay transparent if scrollY < 10 and change if scrollY > 10', () => {
    const { getByTestId } = render(<Header />, {
      wrapper: WrapperWithStyledComponents,
    });

    const header = getByTestId('header');

    window.addEventListener('scroll', () => {});

    expect(header).toHaveStyle('background: transparent');

    fireEvent.scroll(window, { target: { scrollY: 10 } });
    expect(header).toHaveStyle('background: transparent');

    fireEvent.scroll(window, { target: { scrollY: 11 } });
    expect(header).toHaveStyle(`background: ${theme.colors.header_background}`);
  });
});
