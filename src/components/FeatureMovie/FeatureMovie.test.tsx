import { render } from '@testing-library/react';

import { FeatureMovie } from '.';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

describe('FeatureMovie Component', () => {
  it('should render correctly', () => {
    const movie = {
      first_air_date: '2010-10-31',
      genres: [
        { id: 10759, name: 'Action & Adventure' },
        { id: 18, name: 'Drama' },
        { id: 10765, name: 'Sci-Fi & Fantasy' },
      ],
      overview:
        'Chris enfrenta sérios problemas financeiros e Linda, sua esposa, decide partir. Ele agora é pai solteiro e precisa cuidar de Christopher, seu filho de 5 anos. Chris tenta usar sua habilidade como vendedor para conseguir um emprego melhor, mas só consegue um estágio não remunerado. Seus problemas financeiros não podem esperar uma promoção e eles acabam despejados. Chris e Christopher passam a dormir em abrigos ou onde quer que consigam um refúgio, mantendo a esperança de que dias melhores virão.',
      backdrop_path: '/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg',
      original_name: 'The Walking Dead',
      vote_average: 8.1,
      number_of_seasons: 11,
      id: 1402,
    };

    const { container } = render(<FeatureMovie movie={movie} />, {
      wrapper: WrapperWithStyledComponents,
    });

    expect(container).toBeTruthy();
  });

  it('should render season on singular when has only one season', () => {
    const movie = {
      first_air_date: '2010-10-31',
      genres: [
        { id: 10759, name: 'Action & Adventure' },
        { id: 18, name: 'Drama' },
        { id: 10765, name: 'Sci-Fi & Fantasy' },
      ],
      overview:
        'Chris enfrenta sérios problemas financeiros e Linda, sua esposa.',
      backdrop_path: '/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg',
      original_name: 'The Walking Dead',
      vote_average: 8.1,
      number_of_seasons: 1,
      id: 1402,
    };

    const { getByText } = render(<FeatureMovie movie={movie} />, {
      wrapper: WrapperWithStyledComponents,
    });

    expect(getByText('1 temporada')).toBeInTheDocument();
  });
});
