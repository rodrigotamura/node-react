import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdContrast } from 'react-icons/io';
import { MdTextFields } from 'react-icons/md';

import { NavMobile, Accessibility, Profile } from './styles';

export default function MenuMobile() {
  return (
    <NavMobile>
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li>
            <Link to="/">Minhas movimentações</Link>
          </li>
          <li>
            <Link to="/favoreds">Favorecidos</Link>
          </li>
          <li>
            <Link to="/transferings">Nova transferência</Link>
          </li>
          <li>
            <Profile>
              <strong>Rodrigo Tamura</strong>
              <p>
                CPF: 321.123.321-43 <br />
                Cel.: 51 23443 2342
              </p>
              <strong className="saldo">Saldo atual: R$ 1.000,00</strong>
            </Profile>
          </li>
          <li>
            <div>
              <Accessibility>
                <IoMdContrast
                  color="#503026"
                  size={35}
                  title="Alterar contraste"
                />
                <MdTextFields
                  color="#503026"
                  size={35}
                  title="Tamanho da fonte"
                />
              </Accessibility>
            </div>
          </li>
          <li>
            <button type="button">Sair</button>
          </li>
        </ul>
      </div>
    </NavMobile>
  );
}
