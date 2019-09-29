import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import logo from '~/assets/logo_start.svg';

export default function authLayout({ children }) {
  return (
    <Wrapper>
      <img src={logo} alt="Welcome to Ekki" />
      {children}
    </Wrapper>
  );
}

authLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
