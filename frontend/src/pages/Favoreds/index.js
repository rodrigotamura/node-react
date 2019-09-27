import React from 'react';
import { MdPeople } from 'react-icons/md';

import { Container } from './styles';

export default function Favoreds({ history }) {
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
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
          <tr>
            <td>Debora Silveira Silva Tamura</td>
            <td>123456</td>
            <td>512.534.246-55</td>
            <td>51 53455 6344</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
