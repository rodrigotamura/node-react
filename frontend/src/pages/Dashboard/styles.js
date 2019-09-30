import styled from 'styled-components';
import { mediaQueries } from '~/styles/mediaQueries';

export const Container = styled.div`
  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;

    svg {
      margin-right: 15px;
    }
  }

  @media ${mediaQueries.mobile} {
    h1 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    table {
      th, td {
        font-size: 11px;
        padding: 5px !important;
      }
    }
  }

  @media ${mediaQueries.mobileSmall} {
    h1 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    header {
      margin-bottom: 10px;
      h1 {
        font-size: 20px;
        margin-bottom: 0px;
      }
    }

    table {
      th, td {
        font-size: 11px;
        padding: 5px !important;
      }
    }
  }

`;
