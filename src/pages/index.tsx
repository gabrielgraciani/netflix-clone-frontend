import { useEffect, useState } from 'react';
import { FeatureMovie } from '../components/FeatureMovie';
import { Header } from '../components/Header';
import { MovieProps } from '../interfaces/Movie';
import { fetchMovieInfo } from '../services/requests/MovieInfo';
import { fetchMoviesList } from '../services/requests/MoviesList';

export default function Home(): JSX.Element {
  const [featureMovie, setFeatureMovie] = useState<MovieProps | undefined>(
    undefined,
  );

  useEffect(() => {
    const fetchOriginalMovies = async () => {
      const moviesListResponse = await fetchMoviesList();

      const originals = moviesListResponse.filter(i => i.slug === 'originals');

      const randomChosen = Math.floor(
        Math.random() * (originals[0].movies.results.length - 1),
      );

      const chosen = originals[0].movies.results[randomChosen];
      const chosenInfo = await fetchMovieInfo({ movieId: chosen.id });
      setFeatureMovie(chosenInfo);
    };

    fetchOriginalMovies();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <Header />
      {featureMovie && <FeatureMovie movie={featureMovie} />}
    </div>
  );
}
