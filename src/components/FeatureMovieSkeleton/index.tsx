import {
  Container,
  Title,
  SubTitle,
  Description,
  DescriptionLine,
  DescriptionLine2,
  DescriptionLine3,
  ButtonsContainer,
  Button,
  Genres,
} from './styles';

export function FeatureMovieSkeleton(): JSX.Element {
  return (
    <Container>
      <Title />
      <SubTitle />
      <Description>
        <DescriptionLine />
        <DescriptionLine2 />
        <DescriptionLine3 />
      </Description>
      <ButtonsContainer>
        <Button />
        <Button />
      </ButtonsContainer>
      <Genres />
    </Container>
  );
}
