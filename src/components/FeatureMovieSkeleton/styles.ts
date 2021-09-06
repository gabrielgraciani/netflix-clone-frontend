import styled, { keyframes, css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  padding: 23rem 0 15rem 3rem;
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
    background-size: 40rem 6rem;
    animation: ${shimmer} 1s linear infinite;
  }
`;

const Title = styled.div`
  width: 40rem;
  height: 6rem;

  ${SkeletonReusable}
`;

const SubTitle = styled.div`
  width: 25rem;
  height: 3rem;
  margin-top: 2rem;

  ${SkeletonReusable}
`;

const Description = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const DescriptionLine = styled.div`
  width: calc(100% - 10%);
  height: 2rem;
  margin-top: 1.5rem;

  ${SkeletonReusable}
`;

const DescriptionLine2 = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 1.5rem;

  ${SkeletonReusable}
`;
const DescriptionLine3 = styled.div`
  width: calc(100% - 40%);
  height: 2rem;
  margin-top: 1.5rem;

  ${SkeletonReusable}
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40rem;
  margin-top: 2rem;
`;

const Button = styled.div`
  width: 140px;
  height: 45px;
  margin-right: 1rem;

  ${SkeletonReusable}
`;

const Genres = styled.div`
  margin-top: 3rem;
  width: 40rem;
  height: 2rem;

  ${SkeletonReusable}
`;

export {
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
};
