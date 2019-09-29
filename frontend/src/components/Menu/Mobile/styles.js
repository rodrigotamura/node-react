import styled from 'styled-components';

export const NavMobile = styled.nav`
  display: none;
  @media (min-width: 100px) and (max-width: 695px) {
    display: block;
    position: relative;
    top: -55px;
    left: 25px;
    width: 250px;

    &:hover {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: #503026;

      transition: color 0.3s ease;

      &:hover {
        color: tomato;
      }
    }

    div#menuToggle {
      display: block;
      position: relative;
      top: 0px;
      left: 0px;

      z-index: 1;

      -webkit-user-select: none;
      user-select: none;
    }

    div#menuToggle input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;

      cursor: pointer;

      opacity: 0;
      z-index: 2;

      -webkit-touch-callout: none;
    }

    #menuToggle span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #cdcdcd;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    #menuToggle span:first-child {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    /*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
    #menuToggle input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }

    /*
 * But let's hide the middle one.
 */
    #menuToggle input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
 * Ohyeah and the last one should go the other direction
 */
    #menuToggle input:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    /*
 * Make this absolute positioned
 * at the top left of the screen
 */
    #menu {
      opacity: 0.9;
      position: absolute;
      width: 300px;
      margin: -100px 0 0 -50px;
      padding: 50px;
      padding-top: 125px;

      background: #ededed;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      /* to stop flickering of text in safari */

      transform-origin: 0% 0%;
      transform: translate(-100%, 0);

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    #menu li {
      padding: 10px 0;
      font-size: 15px;
      text-transform: uppercase;

      a::before {
        content: '- ';
      }
    }

    /*
 * And let's slide it in from the left
 */
    #menuToggle input:checked ~ ul {
      transform: none;
    }
  }

  li button {
    background: #c34449;
    color: #fff;
    width: 100%;

    &:hover {
      background: #fff;
      color: #333;
    }
  }
`;

export const Accessibility = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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

export const Profile = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  background: red;

  font-size: 13px;
  padding: 10px;
  background: #fff;
`;
