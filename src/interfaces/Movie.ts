import { GenreProps } from './Genre';

export interface MovieProps {
  first_air_date: string;
  genres: GenreProps[];
  overview: string;
  backdrop_path: string;
  original_name: string;
  vote_average: number;
  number_of_seasons: number;
  id: number;
  original_title: string;
  poster_path: string;
}
