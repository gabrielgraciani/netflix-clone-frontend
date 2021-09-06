import { Container, Title, Movies, Movie } from './styles';

export function MovieRowSkeleton(): JSX.Element {
  return (
    <Container>
      <Title />
      <Movies>
        {Array.from(Array(7).keys()).map(k => (
          <Movie key={k} />
        ))}
      </Movies>
    </Container>
  );
}
