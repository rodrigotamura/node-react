import React from 'react';
import { Link } from 'react-router-dom';

import { MdInfo } from 'react-icons/md';

import { Container, Content } from './styles';

import logo from '~/assets/logo_header.svg';

export default function Header() {
  return (
    <>
      <Container>
        <Content>
          <nav>
            <Link to="/">
              <img src={logo} alt="Home" />
            </Link>

            <div>
              <span>
                <strong>
                  <span>Rodrigo Tamura</span>
                  <MdInfo color="#fff" size={30} />
                </strong>
                <p>Saldo atual: R$ 1.000,00</p>
              </span>
              <button type="button">Sair</button>
            </div>
          </nav>
        </Content>
      </Container>
    </>
  );
}
