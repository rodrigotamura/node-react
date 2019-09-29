import styled from 'styled-components';
import { darken } from 'polished';
import { mediaQueries } from '~/styles/mediaQueries';

export const Container = styled.div`
  width: 408px;
  margin-top: 20px;
  padding: 0 10px;

  form {
    display: flex;
    flex-direction: column;

    button {
      background: #513026;
      color: #fff;

      &:hover {
        background: ${darken(0.5, '#513026')};
      }
    }

    div {
      display: flex;
      justify-content: space-around;
      margin-top: 15px;

      svg:hover {
        fill: #513026;
        background-color: #fff;
        padding: 3px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }

  @media ${mediaQueries.mobile} {
    width: 380px;
  }

  @media ${mediaQueries.mobileSmall} {
    max-width: 355px;
  }
`;
