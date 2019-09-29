import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdDone } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { updateBalance } from '~/store/modules/user/actions';
import iconHeader from '~/assets/vaadin-money-exchange.svg';

import { Container } from './styles';
import api from '~/services/api';
import { formatPrice } from '~/utils/format';

export default function Transferings({ history }) {
  const [loading, setLoading] = useState(false);
  const [favoreds, setFavoreds] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedFavored, setSelectedFavored] = useState({});
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    id: Yup.number()
      .typeError('Favor selecionar um favorecido')
      .required('Favor selecionar um favorecido'),
    value: Yup.number()
      .typeError('Informe o valor')
      .required('Valor obrigatório'),
  });

  useEffect(() => {
    async function loadFavoreds() {
      const response = await api.get('favoreds');
      setFavoreds(response.data);

      // populating options
      const optionsT = response.data.map(fav => ({
        id: fav.id,
        title: fav.name,
      }));

      setOptions(optionsT);
    }

    loadFavoreds();
  }, []);

  function handleChange(e) {
    const selectedFavoredId = Number(e.target.value);

    const selectedInfo = favoreds.find(fav => fav.id === selectedFavoredId);

    setSelectedFavored(selectedInfo);
  }

  async function handleSubmit(data) {
    setLoading(true);
    try {
      const response = await api.post('transactions', {
        user_id_destiny: data.id,
        value: data.value,
      });

      // dispatching balance Redux
      dispatch(updateBalance(response.data.balance));

      toast.success(
        `Transferência de ${formatPrice(data.value)} para ${
          selectedFavored.name
        } foi realizado com sucesso!`
      );

      history.push('/');
    } catch (err) {
      toast.error(`Ops, aconteceu algo: ${err.response.data.error}`);
    }
    setLoading(false);
  }

  return (
    <Container>
      <h1>
        <img src={iconHeader} alt="Nova transferência" />
        <span>Nova transferência</span>
      </h1>

      <Form onSubmit={handleSubmit} schema={schema}>
        <div className="line1">
          <span className="input-group">
            <label htmlFor="id">Favorecido(a):</label>
            <span>
              <Select
                name="id"
                placeholder="Selecione"
                id="id"
                options={options}
                onChange={handleChange}
              />
            </span>
          </span>
          <span className="account">
            Conta: {selectedFavored.account_number}
          </span>
        </div>
        <div className="line2">
          <span className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <span>{selectedFavored.cpf}</span>
          </span>
          <span className="input-group">
            <label htmlFor="mobile">Celular:</label>
            <span>{selectedFavored.mobile}</span>
          </span>
        </div>

        <div className="line3">
          <span className="input-group">
            <label htmlFor="value">Valor a ser transferido:</label>
            <span className="currency">R$</span>
            <span className="amount">
              <Input type="number" step="0.01" id="value" name="value" />
            </span>
          </span>

          <button type="submit" className="btn-confirm">
            {loading ? (
              <FaSpinner color="#fff" size={18} />
            ) : (
              <>
                <MdDone />
                Transferir agora
              </>
            )}
          </button>
        </div>
      </Form>
    </Container>
  );
}

Transferings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
