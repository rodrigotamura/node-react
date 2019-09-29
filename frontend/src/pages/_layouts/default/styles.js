import styled from 'styled-components';
import { mediaQueries } from '~/styles/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  width: 99%;
  min-width: 350px;
  margin: 0 auto;
  padding: 60px;
  color: #503026;

  @media ${mediaQueries.tablet} {
    width: 95%;
    padding: 30px;
  }

  @media ${mediaQueries.mobile} {
    padding: 15px;
    min-width: 370px;

    table {
      td {
        font-size: 12px;
      }
    }
  }

  @media ${mediaQueries.mobileSmall} {
    padding: 15px;
    min-width: 370px;

    table {
      td {
        font-size: 12px;
      }
    }
  }
`;
