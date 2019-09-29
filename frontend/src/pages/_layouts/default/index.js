import React from 'react';
import PropTypes from 'prop-types';
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

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
