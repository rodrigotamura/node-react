import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdContrast } from 'react-icons/io';
import { MdTextFields } from 'react-icons/md';
import { Container, Navbar, Accessibility } from './styles';

export default function Menu() {
  return (
    <Container>
      <Navbar>
        <li>
          <Link to="/">Minhas movimentações</Link>
        </li>
        <li>
          <Link to="/favoreds">Favorecidos</Link>
        </li>
        <li>
          <Link to="/transferings">Nova transferência</Link>
        </li>
      </Navbar>
      <Accessibility>
        <IoMdContrast color="#fff" size={35} title="Alterar contraste" />
        <MdTextFields color="#fff" size={35} title="Tamanho da fonte" />
      </Accessibility>
    </Container>
  );
}
