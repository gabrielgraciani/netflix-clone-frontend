import { MovieProps } from './Movie';

export interface MovieListProps {
  title: string;
  movies: {
    results: MovieProps[];
  };
}
