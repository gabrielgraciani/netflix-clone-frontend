import { useEffect, useState } from 'react';
import Head from 'next/head';

import { FeatureMovie } from '../components/FeatureMovie';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MovieRow } from '../components/MovieRow';
import { MovieProps } from '../interfaces/Movie';
import { MovieListProps } from '../interfaces/MovieList';
import { fetchMovieInfo } from '../services/requests/MovieInfo';
import { fetchMoviesList } from '../services/requests/MoviesList';

import { Container, Section } from './home.styles';
import { FeatureMovieSkeleton } from '../components/FeatureMovieSkeleton';
import { MovieRowSkeleton } from '../components/MovieRowSkeleton';

export default function Home(): JSX.Element {
  const [isLoadingMoviesList, setIsLoadingMoviesList] = useState(false);
  const [isLoadingFeatureMovie, setIsLoadingFeatureMovie] = useState(false);
  const [moviesList, setMoviesList] = useState<MovieListProps[]>([]);
  const [featureMovie, setFeatureMovie] = useState<MovieProps | undefined>(
    undefined,
  );

  useEffect(() => {
    setIsLoadingMoviesList(true);
    setIsLoadingFeatureMovie(true);
    async function fetchOriginalMovies() {
      const moviesListResponse = await fetchMoviesList();
      setMoviesList(moviesListResponse);
      setIsLoadingMoviesList(false);

      const originals = moviesListResponse.filter(i => i.slug === 'originals');

      const randomChosen = Math.floor(
        Math.random() * (originals[0].movies.results.length - 1),
      );

      const chosen = originals[0].movies.results[randomChosen];
      const chosenInfo = await fetchMovieInfo({ movieId: chosen.id });
      setFeatureMovie(chosenInfo);
      setIsLoadingFeatureMovie(false);
    }

    fetchOriginalMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Netflix | Home</title>
      </Head>
      <Container style={{ width: '100%' }}>
        <Header />

        {isLoadingFeatureMovie ? (
          <FeatureMovieSkeleton />
        ) : (
          featureMovie && <FeatureMovie movie={featureMovie} />
        )}

        <Section>
          {isLoadingMoviesList ? (
            <>
              {Array.from(Array(3).keys()).map(k => (
                <MovieRowSkeleton key={k} />
              ))}
            </>
          ) : (
            moviesList.map(item => (
              <MovieRow
                key={item.title}
                title={item.title}
                movies={item.movies}
              />
            ))
          )}
        </Section>

        <Footer />
      </Container>
    </>
  );
}
