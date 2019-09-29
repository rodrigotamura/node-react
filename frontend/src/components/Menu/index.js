import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from './styles';

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
    </Container>
  );
}
