import styled from 'styled-components';

export const Container = styled.div`
  background: #513026;
  width: 100%;
  height: 92px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    align-items: center;

    img {
      padding: 5px;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        transition: background 200ms;
        cursor: pointer;
      }
    }

    div {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      span {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        font-size: 18px;
        align-content: flex-end;
        margin-right: 15px;

        strong {
          color: #fff;
          white-space: nowrap;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;

          svg:hover {
            fill: #c34449;
            cursor: pointer;
            transition: fill 200ms;
          }
        }

        p {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: baseline;
          white-space: nowrap;
          color: #fff;
          margin-top: 3px;
          font-weight: bold;
          font-size: 24px;
        }
      }

      button {
        background: #c34449;
        color: #fff;
        margin-left: 15px;

        &:hover {
          background: #fff;
          color: #333;
        }
      }
    }
  }
`;
