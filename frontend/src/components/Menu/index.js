import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdContrast } from 'react-icons/io';
import { MdTextFields } from 'react-icons/md';
import { Container, Navbar, Accessibility } from './styles';

export default function Menu() {
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <li>Minhas movimentações</li>
        </Link>
        <Link to="/favoreds">
          <li>Favorecidos</li>
        </Link>
        <Link to="/transferings">
          <li>Nova transferência</li>
        </Link>
      </Navbar>
      <Accessibility>
        <IoMdContrast color="#fff" size={35} title="Alterar contraste" />
        <MdTextFields color="#fff" size={35} title="Tamanho da fonte" />
      </Accessibility>
    </Container>
  );
}
