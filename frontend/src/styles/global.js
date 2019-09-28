import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from './mediaQueries';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(180deg, #98181D, #C34449) fixed;
  }

  body, input, textarea, button {
    font: 14px 'Roboto', sans-serif;
    -internal-autofill-selected: none;
  }

  input, textarea, select {
    border: none;
    background: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 13px;
    color: #333;
    width: 100%
  }

  input:disabled {
    color: #777;
  }

  button {
    border: none;
    font-weight: bold;
    padding: 15px;
    border-radius: 4px;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;
    width: 100%
  }


  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  table {
    width: 100%;
    font-size: 18px;

    th, td {
      padding: 14px;
      font-size: 19px;
    }

    thead {
      th {
        border-bottom: #333 1px solid;
        font-weight: normal;
        text-align:left;
        font-size: 16px;
      }
    }

    tbody {
      tr:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    @media ${mediaQueries.mobile} {

      thead {
        th {
          border-bottom: #333 1px solid;
          font-weight: normal;
          text-align:left;
          font-size: 13px;
        }
      }

      tbody {
        td {
          font-size: 13px;
        }
      }
    }
  }

  .Toastify__toast--success {
    background: #31694b;
  }
`;
