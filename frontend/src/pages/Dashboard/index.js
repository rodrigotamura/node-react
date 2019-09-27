import React from 'react';
import { MdFormatListBulleted } from 'react-icons/md';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>
        <MdFormatListBulleted />
        <span>Suas movimentações</span>
      </h1>

      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
          <tr>
            <td>25/09/19</td>
            <td>Transferência para Fulano de Tal</td>
            <td>R$ -30,00</td>
            <td>R$ 800,00</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
