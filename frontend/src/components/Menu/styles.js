import styled from 'styled-components';
import { mediaQueries } from '~/styles/mediaQueries';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 15px;
  align-items: center;

  @media ${mediaQueries.tablet} {
    padding: 5px;
  }

  @media ${mediaQueries.mobile} {
    display: none;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;

  a {
    color: #fff;
    font-size: 19px;
    padding: 4px 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    @media ${mediaQueries.tablet} {
      a {
        color: #fff;
        font-size: 19px;
        padding: 4px 10px;
        border-radius: 4px;
        transition: all 200ms;
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  li {
    margin: 21px 0;
    margin-right: 50px;

    @media ${mediaQueries.tablet} {
      margin-right: 8px;
      text-transform: uppercase;
      white-space: nowrap;
    }
  }
`;

export const Accessibility = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    margin-left: 15px;
    border-radius: 4px;
    transition: all 200ms;
    font-size: 19px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }
  }
`;
