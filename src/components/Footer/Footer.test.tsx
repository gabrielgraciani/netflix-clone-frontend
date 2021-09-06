import { render } from '@testing-library/react';

import { Footer } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

describe('Footer Component', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Footer />, {
      wrapper: WrapperWithStyledComponents,
    });

    const textFooter = getByText(
      'Todos os direitos das imagens são da Netflix. Dados Extraidos de www.themoviedb.org',
    );

    expect(container).toBeTruthy();
    expect(textFooter).toBeTruthy();
  });
});
