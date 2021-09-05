import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Container, LogoContainer, UserContainer } from './styles';

export function Header(): JSX.Element {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setIsBackgroundVisible(true);
      } else {
        setIsBackgroundVisible(false);
      }
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container isBackgroundVisible={isBackgroundVisible} data-testid="header">
      <Link href="/">
        <LogoContainer>
          <img src="/images/logo.svg" alt="Netflix" />
        </LogoContainer>
      </Link>
      <UserContainer>
        <img src="/images/userImage.png" alt="User" />
      </UserContainer>
    </Container>
  );
}
