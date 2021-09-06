import { MovieProps } from '../../interfaces/Movie';

export interface MovieRowProps {
  title: string;
  movies: {
    results: MovieProps[];
  };
}

export interface StyledArrowsProps {
  isShowing: boolean;
}
