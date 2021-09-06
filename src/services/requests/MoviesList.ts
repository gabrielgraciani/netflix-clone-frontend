import { Endpoints } from '../../config/Endpoints';
import { MovieProps } from '../../interfaces/Movie';
import { api } from '../api';

interface MovieListProps {
  slug: string;
  title: string;
  movies: {
    results: MovieProps[];
  };
}

export async function fetchMoviesList(): Promise<MovieListProps[]> {
  const responseOriginals = await api.get(Endpoints.originals);
  const responseTrending = await api.get(Endpoints.trending);
  const responseToprated = await api.get(Endpoints.toprated);
  const responseAction = await api.get(Endpoints.action);
  const responseComedy = await api.get(Endpoints.comedy);
  const responseHorror = await api.get(Endpoints.horror);
  const responseRomance = await api.get(Endpoints.romance);
  const responseDocumentary = await api.get(Endpoints.documentary);

  const formattedResponse = [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      movies: responseOriginals.data,
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      movies: responseTrending.data,
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      movies: responseToprated.data,
    },
    {
      slug: 'action',
      title: 'Ação',
      movies: responseAction.data,
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      movies: responseComedy.data,
    },
    {
      slug: 'horror',
      title: 'Terror',
      movies: responseHorror.data,
    },
    {
      slug: 'romance',
      title: 'Romance',
      movies: responseRomance.data,
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      movies: responseDocumentary.data,
    },
  ];

  return formattedResponse;
}
