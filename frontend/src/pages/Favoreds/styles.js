import styled from 'styled-components';
import { darken } from 'polished';
import { mediaQueries } from '~/styles/mediaQueries';

export const Container = styled.div`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 25px;

      svg {
        margin-right: 15px;
      }
    }

    button {
      max-width: 250px;
      height: 100%;
      background: #229169;
      color: #fff;

      &:hover {
        background: ${darken(0.1, '#229169')};
      }
    }

    @media ${mediaQueries.mobile} {
      margin-bottom: 10px;
      h1 {
        font-size: 20px;
        margin-bottom: 0px;
      }

      button {
        max-width: 200px;
        background: #229169;
        color: #fff;
        font-size: 14px;

        &:hover {
          background: ${darken(0.1, '#229169')};
        }
      }
    }
  }

  table {
    tbody {
      tr:hover {
        cursor: pointer;
      }
    }
  }
`;
