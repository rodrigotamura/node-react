import styled from 'styled-components';

export const Container = styled.div``;
export const Info = styled.div`
  position: absolute;
  width: 200px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  top: ${props => (props.visible ? '65px' : '-200px')};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: all 0.2s;
  flex-direction: column !important;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 15px !important;
  }
`;
