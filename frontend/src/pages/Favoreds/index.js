import React, { useState, useEffect } from 'react';
import { MdPeople } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';
import api from '~/services/api';

export default function Favoreds({ history }) {
  const [favoreds, setFavoreds] = useState([]);

  useEffect(() => {
    async function loadFavoreds() {
      const response = await api.get('favoreds');

      setFavoreds(response.data);
    }

    loadFavoreds();
  }, []);

  return (
    <Container>
      <header>
        <h1>
          <MdPeople />
          <span>Favorecidos</span>
        </h1>
        <button type="button" onClick={() => history.push('/favoreds/new')}>
          Cadastrar novo favorecido
        </button>
      </header>

      {favoreds.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Número da conta</th>
              <th>CPF</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            {favoreds.map(favored => (
              <tr
                onClick={() => {
                  history.push(`/favoreds/${favored.id}`);
                }}
                key={favored.id}
              >
                <td>{favored.name}</td>
                <td>{favored.account_number}</td>
                <td>{favored.cpf}</td>
                <td>{favored.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>Por enquanto você não possui nenhum favorecido.</span>
      )}
    </Container>
  );
}
Favoreds.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
