import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoMdContrast } from 'react-icons/io';
import { MdTextFields } from 'react-icons/md';
import { signOut } from '~/store/modules/auth/actions';

import { NavMobile, Accessibility, Profile } from './styles';

export default function MenuMobile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
              <strong>{profile.name}</strong>
              <p>
                CPF: {profile.cpf} <br />
                Cel.: {profile.mobile}
              </p>
              <strong className="saldo">
                Saldo atual: {profile.formatedBalance}
              </strong>
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
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </li>
        </ul>
      </div>
    </NavMobile>
  );
}
