import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: 0 0 3rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;

export { Container };
