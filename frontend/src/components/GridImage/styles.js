import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 90%;

    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
