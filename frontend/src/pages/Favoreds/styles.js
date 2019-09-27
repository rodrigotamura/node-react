import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  }

  table {
    tbody {
      tr:hover {
        cursor: pointer;
      }
    }
  }
`;
