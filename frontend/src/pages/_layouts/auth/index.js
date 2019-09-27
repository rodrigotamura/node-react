import React from 'react';

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
