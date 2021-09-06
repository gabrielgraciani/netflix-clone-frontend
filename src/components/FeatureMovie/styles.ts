import styled from 'styled-components';

const Container = styled.section`
  height: 90vh;
`;

const FeatureVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.primary},
    transparent 90%
  );
`;

const FeatureHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary} 30%,
    transparent 70%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 0 15rem 3rem;
`;

const FeatureHorizontalName = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

const FeatureHorizontalInfo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FeatureHorizontalPoints = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.featured_movie_green};
  margin-right: 1.5rem;
  font-size: 1.8rem;
`;

const FeatureHorizontalYear = styled.div`
  display: inline-block;
  margin-right: 1.5rem;
  font-size: 1.8rem;
`;

const FeatureHorizontalSeasons = styled.div`
  display: inline-block;
  font-size: 1.8rem;
`;

const FeatureHorizontalDescription = styled.div`
  margin-top: 1.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray};
  max-height: 30%;
  max-width: 40%;
  overflow: hidden;
`;

const FeatureHorizontalButtons = styled.div`
  margin-top: 1.5rem;

  & a {
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    padding: 1.1rem 2.5rem;
    text-decoration: none;
    margin-right: 1rem;
    border-radius: 0.5rem;
    opacity: 1;
    transition: all ease 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const FeatureHorizontalWatchButton = styled.a`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const FeatureHorizontalMyListButton = styled.a`
  background-color: ${({ theme }) => theme.colors.dark_gray};
  color: ${({ theme }) => theme.colors.white};
`;

const FeatureHorizontalGenres = styled.div`
  margin-top: 1.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export {
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
};
