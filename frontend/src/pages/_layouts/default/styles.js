import styled from 'styled-components';
import { mediaQueries } from '~/styles/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  width: 99%;
  max-width: 1440px;
  min-width: 410px;
  margin: 0 auto;
  padding: 60px;
  color: #503026;

  @media ${mediaQueries.tablet} {
    width: 95%;
    padding: 30px;
  }

  @media ${mediaQueries.mobile} {
    width: 95%;
    padding: 15px;
  }
`;
