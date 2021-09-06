import styled, { keyframes, css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const shimmer = keyframes`
  0% {
    background-position: -40rem 0;
  }
  100% {
    background-position: 40rem 0;
  }
`;

const SkeletonReusable = css`
  position: relative;
  border-radius: 0.4rem;
  background: #656871;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #656871 0%,
      #888b94 20%,
      #656871 40%,
      #656871 100%
    );
    background-repeat: no-repeat;
    background-size: 40rem 60rem;
    animation: ${shimmer} 1s linear infinite;
  }
`;

const Title = styled.div`
  width: 20rem;
  height: 2rem;
  ${SkeletonReusable};
  margin-left: 3rem;
`;

const Movies = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;

const Movie = styled.div`
  width: 15rem;
  height: 20rem;
  ${SkeletonReusable};
  transform: scale(0.9);
`;

export { Container, Title, Movies, Movie };
