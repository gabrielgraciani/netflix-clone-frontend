import { render, fireEvent } from '@testing-library/react';

import { MovieRow } from '.';
import { MovieListProps } from '../../interfaces/MovieList';
import { WrapperWithStyledComponents } from '../../tests/WrapperWithStyledComponents';

const data = {
  title: 'Originais do Netflix',
  movies: {
    results: [
      {
        backdrop_path: '/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg',
        first_air_date: '2021-08-11',
        id: 91363,
        name: 'E Se...?',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'What If...?',
        overview:
          '"E Se...?" muda tudo no MCU, ao reimaginar os acontecimentos dos filmes de formas inesperadas. A primeira série de animação dos Marvel Studios centra-se em vários heróis do MCU e inclui um elenco de vozes com uma série de estrelas que retomam os seus papéis. A série é dirigida por Bryan Andrews e Ashley Bradley é o argumentista principal.',
        popularity: 1964.303,
        poster_path: '/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg',
        vote_average: 8.5,
        vote_count: 1238,
      },
      {
        backdrop_path: '/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg',
        first_air_date: '2017-05-02',
        id: 71446,
        name: 'La casa de papel',
        origin_country: ['ES'],
        original_language: 'es',
        original_name: 'La casa de papel',
        overview:
          'Oito habilidosos ladrões trancam-se na Casa da Moeda de Espanha com o ambicioso plano de realizar o maior roubo da história e levar com eles mais de 2 mil milhões de euros. Para isso, o gangue precisa lidar com as dezenas de pessoas que mantém reféns, além dos agentes da força de elite da polícia, que farão de tudo para que o assalto fracasse.',
        popularity: 1699.398,
        poster_path: '/yVUAfbrP5HDJugXraB7KQS0yz6Z.jpg',
        vote_average: 8.3,
        vote_count: 13980,
      },
      {
        backdrop_path: '/zN8vBX1jDRxIDqFQ2ARcodTHhdt.jpg',
        first_air_date: '2021-08-17',
        id: 129203,
        name: '乔家的儿女',
        origin_country: ['CN'],
        original_language: 'zh',
        original_name: '乔家的儿女',
        overview: '',
        popularity: 1513.026,
        poster_path: '/dLUJGSrFWA1h3pnAqygAHK7ShVb.jpg',
        vote_average: 6.7,
        vote_count: 3,
      },
      {
        backdrop_path: '/bjsoOPkViI5WIREQb94XDeXrZlF.jpg',
        first_air_date: '2021-07-26',
        id: 129936,
        name: 'Ilha Record',
        origin_country: ['BR'],
        original_language: 'pt',
        original_name: 'Ilha Record',
        overview: '',
        popularity: 1217.39,
        poster_path: '/43pX5G2eL4H6EppxVcirMxdkcGN.jpg',
        vote_average: 3.8,
        vote_count: 11,
      },
      {
        backdrop_path: '/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg',
        first_air_date: '2010-10-31',
        id: 1402,
        name: 'The Walking Dead',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'The Walking Dead',
        overview:
          'Esta série acompanha um grupo de sobreviventes durante um apocalipse de zombies. Por vezes, os conflitos interpessoais são tão perigosos que há quem esteja disposto a qualquer coisa para sobreviver.',
        popularity: 1077.178,
        poster_path: '/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
        vote_average: 8.1,
        vote_count: 11520,
      },
      {
        backdrop_path: '/kXja7L9cRlsRmINMpxyWEdp9r3u.jpg',
        first_air_date: '2021-06-09',
        id: 84958,
        name: 'Loki',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'Loki',
        overview:
          'Depois de roubar o Tesseract durante os eventos de "Vingadores: Endgame", uma versão alternativa de Loki é levada à misteriosa Autoridade de Variação Temporal (AVT), uma organização burocrática que existe fora do tempo e do espaço e monitoriza a linha do tempo. Dão a Loki uma escolha: ser apagado da existência por ser uma "variante temporal" ou ajudar a corrigir a linha do tempo e parar uma ameaça maior.',
        popularity: 1046.649,
        poster_path: '/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
        vote_average: 8.2,
        vote_count: 7539,
      },
      {
        backdrop_path: '/zJZfxi8X3XPHAhxXseRugtnNVtt.jpg',
        first_air_date: '2013-12-02',
        id: 60625,
        name: 'Rick and Morty',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'Rick and Morty',
        overview:
          'O brilhante e alcoólico cientista Rick "rapta" o seu neto adolescente, Morty, para viagens loucas em outros mundos e dimensões alternativas.',
        popularity: 1043.525,
        poster_path: '/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
        vote_average: 8.8,
        vote_count: 5269,
      },
      {
        backdrop_path: '/Al1NiPYGzKddngu8L5NNtsoANYU.jpg',
        first_air_date: '2017-09-25',
        id: 71712,
        name: 'O bom doutor',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'The Good Doctor',
        overview:
          'Um jovem cirurgião diagnosticado com savantismo, um distúrbio psíquico raro, é recrutado para trabalhar na ala pediátrica de um hospital de prestígio. Apesar do seu incrível conhecimento na área da medicina, o médico não consegue se relacionar com o mundo à sua volta. Resta saber se esta dificuldade será um problema na hora de salvar vidas.',
        popularity: 982.74,
        poster_path: '/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
        vote_average: 8.6,
        vote_count: 9272,
      },
      {
        backdrop_path: '/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg',
        first_air_date: '2016-01-25',
        id: 63174,
        name: 'Lucifer',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'Lucifer',
        overview:
          'Entediado e infeliz como o Senhor do inferno, Lúcifer abdica de seu trono e abandona seu reinado para viver na atordoada Los Angeles. Lá, ele dá início a outro empreendimento: ele abre um Piano-Bar chamado Lux.',
        popularity: 904.463,
        poster_path: '/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
        vote_average: 8.5,
        vote_count: 10012,
      },
      {
        backdrop_path: '/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
        first_air_date: '2017-01-26',
        id: 69050,
        name: 'Riverdale',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'Riverdale',
        overview:
          'Riverdale traz uma abordagem subversiva de Archie (KJ Apa), Betty (Lili Reinhart), Veronica (Camila Mendes), Jughead Jones (Cole Sprouse), Josie (Ashleigh Murray) e seus amigos, explorando o surrealismo de uma pequena cidade e seus curiosos habitantes. A história começa quando a cidade se recupera de uma trágica perda, o que leva Archie a pensar mais seriamente a respeito de seu futuro. Com isto, ele embarca em uma jornada em busca de realizar o seu sonho de tornar um grande músico; mas cumprir essa missão não será nada fácil, enquanto Archie ainda precisa lidar com sua agitada vida amorosa, dividido entre Betty e Veronica.',
        popularity: 861.435,
        poster_path: '/6zBWSuYW3Ps1nTfeMS8siS4KUaA.jpg',
        vote_average: 8.6,
        vote_count: 11855,
      },
      {
        backdrop_path: '/pXjpqrx65mlQskf9mfTWSszYODn.jpg',
        first_air_date: '2020-05-18',
        id: 80986,
        name: "DC's Stargirl",
        origin_country: ['US'],
        original_language: 'en',
        original_name: "DC's Stargirl",
        overview:
          'A história de Courtney Whitmore, uma jovem inteligente, atlética e acima de tudo gentil cuja vida aparentemente perfeita sofre uma reviravolta com o casamento da mãe. Depois de se mudar para Blue Valley, Nebraska, Courtney tem que se adaptar a uma nova escola, aos novos amigos e à nova família, em especial depois de descobrir que o padrasto tem um segredo: já foi ajudante de um super-herói.',
        popularity: 816.227,
        poster_path: '/ogntmK9hwBomhajqYrHXUAaqkd7.jpg',
        vote_average: 7.9,
        vote_count: 812,
      },
      {
        backdrop_path: '/eyG9srihv68ScRdEbJZj66WT4O0.jpg',
        first_air_date: '2014-10-07',
        id: 60735,
        name: 'The Flash',
        origin_country: ['US'],
        original_language: 'en',
        original_name: 'The Flash',
        overview:
          'Depois de ser atingido por um raio e ficar em coma durante nove meses, o investigador da polícia Barry Allen desperta com uma velocidade relâmpago e a ambição de se tornar um super-herói, o Flash.',
        popularity: 809.265,
        poster_path: '/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
        vote_average: 7.8,
        vote_count: 8373,
      },
      {
        backdrop_path: '/ki2V3d7DrQ79mYWvnXjTPLCgBdW.jpg',
        first_air_date: '2021-08-06',
        id: 95281,
        name: 'S.O.Z: Soldados o Zombies',
        origin_country: ['ES'],
        original_language: 'es',
        original_name: 'S.O.Z: Soldados o Zombies',
        overview: '',
        popularity: 795.231,
        poster_path: '/arYdHX708nDq6oWNOSjw6NczWc5.jpg',
        vote_average: 7.4,
        vote_count: 359,
      },
      {
        backdrop_path: '/3IIBf6VlwEyKAX4cN2XCM1gKdgM.jpg',
        first_air_date: '2005-03-27',
        id: 1416,
        name: 'Anatomia de Grey',
        origin_country: ['US'],
        original_language: 'en',
        original_name: "Grey's Anatomy",
        overview:
          'Os médicos do Grey Sloan Memorial Hospital lidam com consequências de vida ou morte todos os dias - é uns nos outros que encontram conforto, amizade e, por vezes, mais do que amizade. Juntos, descobrem que nem a medicina nem as relações humanas são a preto e branco. A vida real tem vários tons de cinzento.',
        popularity: 714.452,
        poster_path: '/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
        vote_average: 8.2,
        vote_count: 6648,
      },
      {
        backdrop_path: '/aGULNElJVpSru19WP2pUjopPX1U.jpg',
        first_air_date: '2021-07-28',
        id: 128252,
        name: 'El cartel de los sapos: El origen',
        origin_country: ['CO'],
        original_language: 'es',
        original_name: 'El cartel de los sapos: El origen',
        overview: '',
        popularity: 659.239,
        poster_path: '/A17Rt6BLHno0puR1QXbsSKhBfA4.jpg',
        vote_average: 8,
        vote_count: 109,
      },
      {
        backdrop_path: '/5DN8LSWLCQySuPoQ5ozDqo9GR9o.jpg',
        first_air_date: '1991-12-30',
        id: 25778,
        name: 'Familie',
        origin_country: ['BE'],
        original_language: 'nl',
        original_name: 'Familie',
        overview: '',
        popularity: 621.088,
        poster_path: '/bPBeBzhhfbF0aYZaHd7ESe0TVwK.jpg',
        vote_average: 7,
        vote_count: 4,
      },
      {
        backdrop_path: '/2748H9LoK2oQd9L7ofze8VjCGhS.jpg',
        first_air_date: '2020-07-13',
        id: 116479,
        name: 'अनुपमा',
        origin_country: ['IN'],
        original_language: 'hi',
        original_name: 'अनुपमा',
        overview: '',
        popularity: 600.872,
        poster_path: '/9R4Qtm01pNh0CzdoIyvHKefe5RL.jpg',
        vote_average: 5.4,
        vote_count: 13,
      },
      {
        backdrop_path: '/1VZ8gN6tPoAd7EdfCzVPmtDczhD.jpg',
        first_air_date: '2021-04-11',
        id: 105009,
        name: '東京リベンジャーズ',
        origin_country: ['JP'],
        original_language: 'ja',
        original_name: '東京リベンジャーズ',
        overview: '',
        popularity: 560.871,
        poster_path: '/e77ZdXs1tFmpTOiFfEZSlcz9ZWN.jpg',
        vote_average: 8.8,
        vote_count: 283,
      },
      {
        backdrop_path: '/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg',
        first_air_date: '2013-09-12',
        id: 60574,
        name: 'Peaky Blinders',
        origin_country: ['GB'],
        original_language: 'en',
        original_name: 'Peaky Blinders',
        overview:
          'Em 1919, um infame gangue de Birmingham é liderado pelo cruel Tommy Shelby, um patrão do crime determinado a conquistar o mundo a qualquer preço.',
        popularity: 555.277,
        poster_path: '/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
        vote_average: 8.6,
        vote_count: 3432,
      },
      {
        backdrop_path: '/aqvOIR4CzCQETw9pAuyXZYKd2Ni.jpg',
        first_air_date: '2021-07-04',
        id: 128141,
        name: 'O Amor Acontece',
        origin_country: ['PT'],
        original_language: 'pt',
        original_name: 'O Amor Acontece',
        overview:
          'Experiência de televisão inovadora entre duas pessoas que não se conhecem, mas têm um sonho em comum: encontrar a sua cara metade.\n\nOs solteiros encontram-se pela primeira vez na casa onde vão morar juntos. Todas as semanas teremos 4 casais, que vivem em 4 casas idílicas e de sonho (na praia, na serra, no campo, etc.).\n\nO primeiro encontro de cada casal deve durar no mínimo 24 horas e no máximo 4 dias, e o espetador vai poder acompanhar todos os passos da vida do recém casal, que pode ou não resultar. Ao final de cada dia, os participantes vão decidir se querem continuar a viver a experiência ou seguir caminhos separados, havendo espaço para um novo casal.',
        popularity: 534.689,
        poster_path: '/tmOZSTwDyQEeigmyWZw6CjcpBi8.jpg',
        vote_average: 2,
        vote_count: 5,
      },
    ],
  },
} as unknown as MovieListProps;

describe('MovieRow Component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MovieRow title="Originals" movies={data.movies} />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    expect(container).toBeTruthy();
  });

  it('should appears arrows when mouse enter', () => {
    const { getByTestId } = render(
      <MovieRow title="Originals" movies={data.movies} />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const MovieRowContainer = getByTestId('MovieRow');
    const ArrowLeft = getByTestId('ArrowLeft');
    const ArrowRight = getByTestId('ArrowRight');

    fireEvent.mouseEnter(MovieRowContainer);

    expect(ArrowLeft).toHaveStyle('opacity: 1');
    expect(ArrowRight).toHaveStyle('opacity: 1');

    fireEvent.mouseLeave(MovieRowContainer);

    expect(ArrowLeft).toHaveStyle('opacity: 0');
    expect(ArrowRight).toHaveStyle('opacity: 0');
  });

  it('should move the movies for left when click on right button', () => {
    const { getByTestId } = render(
      <MovieRow title="Originals" movies={data.movies} />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const MovieRowContainer = getByTestId('MovieRow');
    const MovieRowList = getByTestId('MovieRowList');
    const ArrowRight = getByTestId('ArrowRight');

    fireEvent.mouseEnter(MovieRowContainer);
    fireEvent.click(ArrowRight);

    expect(MovieRowList).toHaveStyle('margin-left: -512px');
  });

  it('should not move the movies for left when click on right button if end the movies', () => {
    const { getByTestId } = render(
      <MovieRow title="Originals" movies={data.movies} />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const MovieRowContainer = getByTestId('MovieRow');
    const MovieRowList = getByTestId('MovieRowList');
    const ArrowRight = getByTestId('ArrowRight');

    fireEvent.mouseEnter(MovieRowContainer);

    fireEvent.click(ArrowRight);
    expect(MovieRowList).toHaveStyle('margin-left: -512px');
    fireEvent.click(ArrowRight);
    expect(MovieRowList).toHaveStyle('margin-left: -1024px');
    fireEvent.click(ArrowRight);
    expect(MovieRowList).toHaveStyle('margin-left: -1536px');
    fireEvent.click(ArrowRight);
    expect(MovieRowList).toHaveStyle('margin-left: -2036px');
    fireEvent.click(ArrowRight);
    expect(MovieRowList).toHaveStyle('margin-left: -2036px');
  });

  it('should move the movies for right when click on left button', () => {
    const { getByTestId } = render(
      <MovieRow title="Originals" movies={data.movies} />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const MovieRowContainer = getByTestId('MovieRow');
    const MovieRowList = getByTestId('MovieRowList');
    const ArrowRight = getByTestId('ArrowRight');
    const ArrowLeft = getByTestId('ArrowLeft');

    fireEvent.mouseEnter(MovieRowContainer);
    fireEvent.click(ArrowRight);
    expect(MovieRowList).toHaveStyle('margin-left: -512px');
    fireEvent.click(ArrowLeft);
    expect(MovieRowList).toHaveStyle('margin-left: 0px');
  });

  it('should not move the movies for right when click on left button if is showing the first movies', () => {
    const { getByTestId } = render(
      <MovieRow title="Originals" movies={data.movies} />,
      {
        wrapper: WrapperWithStyledComponents,
      },
    );

    const MovieRowContainer = getByTestId('MovieRow');
    const MovieRowList = getByTestId('MovieRowList');
    const ArrowLeft = getByTestId('ArrowLeft');

    fireEvent.mouseEnter(MovieRowContainer);

    fireEvent.click(ArrowLeft);
    expect(MovieRowList).toHaveStyle('margin-left: 0px');
  });
});
