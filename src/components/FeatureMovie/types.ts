interface Genre {
  id: number;
  name: string;
}

export interface FeatureMovieProps {
  movie: {
    first_air_date: string;
    genres: Genre[];
    overview: string;
    backdrop_path: string;
    original_name: string;
    vote_average: number;
    number_of_seasons: number;
    id: number;
  };
}
