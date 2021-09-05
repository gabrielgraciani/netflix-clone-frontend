import styled, { css } from 'styled-components';

import { HeaderStyledProps } from './types';

const Container = styled.header<HeaderStyledProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: transparent;
  transition: all 0.2s ease;

  ${({ isBackgroundVisible }) =>
    isBackgroundVisible &&
    css`
      background: ${({ theme }) => theme.colors.header_background};
    `}
`;

const LogoContainer = styled.div`
  height: 2.4rem;
  cursor: pointer;

  img {
    height: 100%;
  }
`;

const UserContainer = styled.div`
  height: 3.4rem;
  cursor: pointer;

  img {
    height: 100%;
    border-radius: 0.4rem;
  }
`;

export { Container, LogoContainer, UserContainer };
