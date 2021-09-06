import { MovieProps } from '../../interfaces/Movie';
import { Endpoints } from '../../config/Endpoints';
import { api } from '../api';

interface FetchMovieInfoProps {
  movieId: number;
}

export async function fetchMovieInfo({
  movieId,
}: FetchMovieInfoProps): Promise<MovieProps> {
  const movieInfo = await api.get(
    Endpoints.movieInfo.replace(':movieId', String(movieId)),
  );

  return movieInfo.data;
}
