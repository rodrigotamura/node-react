import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';
import Infos from '~/components/Infos';

import logo from '~/assets/logo_header.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Content>
          <nav>
            <Link to="/">
              <img src={logo} alt="Home Ekki" />
            </Link>

            <div>
              <span>
                <strong>
                  <span>{profile.name}</span>
                  <Infos profile={profile} />
                </strong>
                <p>Saldo atual: {profile.formatedBalance}</p>
              </span>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
          </nav>
        </Content>
      </Container>
    </>
  );
}
