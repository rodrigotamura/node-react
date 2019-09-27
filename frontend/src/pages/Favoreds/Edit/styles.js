import styled from 'styled-components';
import { darken } from 'polished';
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

  form {
    span.input-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      font-size: 18px;
      background: rgba(255, 255, 255, 0.2);

      label {
        min-width: 175px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(81, 48, 38, 0.7);
        padding: 0 50px;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
      }

      input {
        height: 100%;
        margin: 0px;
      }
    }

    div.line1,
    .line2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    div.line1 {
      span.input-group {
        flex-grow: 1;
        input {
          width: 100%;
        }

        margin-right: 30px;
      }

      span.account {
        white-space: nowrap;
        background: rgba(255, 255, 255, 0.52);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 0.2;
        font-size: 18px;
        font-weight: bold;
      }
    }

    div.line2 {
      span.input-group {
        flex-grow: 1;
        input {
          width: 100%;
        }
      }

      span.input-group:last-child {
        margin-left: 30px;
      }
    }

    div.buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      button {
        height: 46px;
        white-space: nowrap;
      }

      button.btn-back {
        max-width: 186px;
        background: #777;
        color: #fff;

        &:hover {
          background: ${darken(0.1, '#777')};
        }
      }

      div {
        display: flex;
        flex-direction: row;

        button.btn-delete {
          background: #c34449;
          max-width: 68px;
          margin: 0 20px;

          &:hover {
            background: ${darken(0.1, '#c34449')};
          }
        }

        button.btn-confirm {
          background: #229169;
          margin: 0 20px;
          color: #fff;

          &:hover {
            background: ${darken(0.1, '#229169')};
          }
        }
      }
    }
  }

  @media ${mediaQueries.mobile} {
    h1 {
      font-size: 20px;
    }

    span.account {
      padding: 15px !important;
    }

    form {
      div.line1,
      .line2 {
        display: flex;
        flex-direction: column-reverse !important;
        margin-bottom: 0px;
      }

      span.input-group {
        font-size: 15px;
        background: rgba(255, 255, 255, 0.2);
        margin: 15px auto !important;

        label {
          padding: 0px;
          min-width: 100px;
          padding: 17px 0;
        }

        input {
          height: 100%;
          margin: 0px;
          min-width: 280px;
        }
      }

      div.buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        button {
          height: 46px;
          white-space: nowrap;
          font-size: 14px;
        }

        button.btn-back {
          max-width: 186px;
          background: #777;
          color: #fff;

          &:hover {
            background: ${darken(0.1, '#777')};
          }
        }

        div {
          button.btn-confirm {
            margin: 0;
          }
        }
      }
    }
  }
`;
