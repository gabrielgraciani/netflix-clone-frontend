import styled, { css } from 'styled-components';

import { StyledArrowsProps } from './types';

const Container = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin: 0 0 0 3rem;
`;

const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 3rem;
`;

const List = styled.div`
  transition: all ease 0.5s;
  user-select: none;
`;

const ListItem = styled.div`
  display: inline-block;
  width: 15rem;
  cursor: pointer;

  & img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;

const ArrowLeftContainer = styled.div<StyledArrowsProps>`
  position: absolute;
  width: 4rem;
  height: 22.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  color: #fff;

  ${({ isShowing }) =>
    isShowing &&
    css`
      opacity: 1;
      margin-left: 1.5rem;
    `}
`;

const ArrowRightContainer = styled.div<StyledArrowsProps>`
  position: absolute;
  position: absolute;
  width: 4rem;
  height: 22.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  color: #fff;

  ${({ isShowing }) =>
    isShowing &&
    css`
      opacity: 1;
      margin-right: 1.5rem;
    `}
`;

export {
  Container,
  Title,
  ListArea,
  List,
  ListItem,
  ArrowLeftContainer,
  ArrowRightContainer,
};
