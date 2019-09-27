import React from 'react';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
