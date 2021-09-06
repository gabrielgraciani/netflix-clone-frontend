import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import {
  Container,
  Title,
  ListArea,
  List,
  ListItem,
  ArrowLeftContainer,
  ArrowRightContainer,
} from './styles';
import { MovieRowProps } from './types';

export function MovieRow({ title, movies }: MovieRowProps): JSX.Element {
  const [scrollX, setScrollX] = useState(0);
  const [isShowingArrows, setIsShowingArrows] = useState(false);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = movies.results.length * 150;

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };

  return (
    <Container
      onMouseEnter={() => setIsShowingArrows(true)}
      onMouseLeave={() => setIsShowingArrows(false)}
      data-testid="MovieRow"
    >
      <Title>{title}</Title>
      <ArrowLeftContainer
        onClick={handleLeftArrow}
        isShowing={isShowingArrows}
        data-testid="ArrowLeft"
      >
        <MdNavigateBefore style={{ fontSize: 50 }} />
      </ArrowLeftContainer>
      <ArrowRightContainer
        onClick={handleRightArrow}
        isShowing={isShowingArrows}
        data-testid="ArrowRight"
      >
        <MdNavigateNext style={{ fontSize: 50 }} />
      </ArrowRightContainer>

      <ListArea>
        <List
          style={{
            marginLeft: scrollX,
            width: movies.results?.length * 150,
          }}
          data-testid="MovieRowList"
        >
          {movies.results.length > 0 &&
            movies.results.map(item => (
              <ListItem key={`${title}-${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </ListItem>
            ))}
        </List>
      </ListArea>
    </Container>
  );
}
