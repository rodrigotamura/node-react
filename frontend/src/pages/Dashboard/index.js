import React, { useState, useEffect } from 'react';
import { MdFormatListBulleted } from 'react-icons/md';

import { Container } from './styles';
import api from '~/services/api';
import { formatPrice, formatDate } from '~/utils/format';
import Loading from '~/components/Loading';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadTransactions() {
      setLoading(true);
      const response = await api.get('transactions');

      setTransactions(response.data);
      setLoading(false);
    }

    loadTransactions();
  }, []);

  return (
    <Container>
      <h1>
        <MdFormatListBulleted />
        <span>Suas movimentações</span>
      </h1>
      {loading ? (
        <Loading />
      ) : (
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
            {transactions.map(t => (
              <tr key={t.createdAt}>
                <td>{formatDate(new Date(t.createdAt))}</td>
                <td>{t.description}</td>
                <td>{formatPrice(t.value)}</td>
                <td>{formatPrice(t.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
}
