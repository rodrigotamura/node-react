import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import { NavMobile, Profile } from './styles';

export default function MenuMobile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const closeRef = useRef(null);
  const onMenuItemClick = () => {
    closeRef.current.click();
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <NavMobile>
      <div id="menuToggle">
        <input type="checkbox" ref={closeRef} />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li>
            <Link to="/" onClick={onMenuItemClick}>Minhas movimentações</Link>
          </li>
          <li>
            <Link to="/favoreds" onClick={onMenuItemClick}>Favorecidos</Link>
          </li>
          <li>
            <Link to="/transferings" onClick={onMenuItemClick}>Nova transferência</Link>
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
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </li>
        </ul>
      </div>
    </NavMobile>
  );
}
