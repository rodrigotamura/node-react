import React from 'react';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import MenuMobile from '~/components/Menu/Mobile';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <MenuMobile />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
