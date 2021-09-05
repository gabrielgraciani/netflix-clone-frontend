import {
  Container,
  FeatureVertical,
  FeatureHorizontal,
  FeatureHorizontalName,
  FeatureHorizontalInfo,
  FeatureHorizontalPoints,
  FeatureHorizontalYear,
  FeatureHorizontalSeasons,
  FeatureHorizontalDescription,
  FeatureHorizontalButtons,
  FeatureHorizontalGenres,
  FeatureHorizontalWatchButton,
  FeatureHorizontalMyListButton,
} from './styles';
import { FeatureMovieProps } from './types';

export function FeatureMovie({ movie }: FeatureMovieProps): JSX.Element {
  const firstDate = new Date(movie.first_air_date);
  const genres: string[] = [];

  movie.genres.forEach(movie => {
    genres.push(movie.name);
  });

  let description = movie.overview;
  if (description.length > 200) {
    description = description.substring(0, 200).concat('...');
  }

  return (
    <Container
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <FeatureVertical>
        <FeatureHorizontal>
          <FeatureHorizontalName>{movie.original_name}</FeatureHorizontalName>
          <FeatureHorizontalInfo>
            <FeatureHorizontalPoints>
              {movie.vote_average} pontos
            </FeatureHorizontalPoints>
            <FeatureHorizontalYear>
              {firstDate.getFullYear()}
            </FeatureHorizontalYear>
            <FeatureHorizontalSeasons>
              {movie.number_of_seasons} temporada
              {movie.number_of_seasons !== 1 ? 's' : ''}
            </FeatureHorizontalSeasons>
          </FeatureHorizontalInfo>
          <FeatureHorizontalDescription>
            {description}
          </FeatureHorizontalDescription>
          <FeatureHorizontalButtons>
            <FeatureHorizontalWatchButton href={`/watch/${movie.id}`}>
              ► Assistir
            </FeatureHorizontalWatchButton>
            <FeatureHorizontalMyListButton href={`/list/add/${movie.id}`}>
              + Minha Lista
            </FeatureHorizontalMyListButton>
          </FeatureHorizontalButtons>
          <FeatureHorizontalGenres>
            Gêneros: <strong> {genres.join(', ')} </strong>
          </FeatureHorizontalGenres>
        </FeatureHorizontal>
      </FeatureVertical>
    </Container>
  );
}
