import React, { useState } from 'react';
import { MdPeople, MdArrowBack, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from './styles';
import api from '~/services/api';

export default function FavoredNew({ history }) {
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    cpf: Yup.string().required('CPF obrigatório'),
    mobile: Yup.string().required('Número de celular obrigatório'),
  });

  async function handleSubmit(data) {
    setLoading(true);
    try {
      const response = await api.post('favoreds', { ...data });

      if (response.data.created) {
        toast.success(`${data.name} foi cadastrado como seu favorecido.`);
      } else {
        toast.warn(
          `Houve um conflito de CPF. O usuário ${response.data.favored.name} foi vinculado como seu favorecido.`
        );
      }

      history.push('/favoreds');
    } catch (err) {
      toast.error(`Ops, aconteceu algo: ${err.response.data.error}`);
    }
    setLoading(false);
  }
  return (
    <Container>
      <h1>
        <MdPeople />
        <span>Favorecidos - Cadastro</span>
      </h1>

      <Form onSubmit={handleSubmit} schema={schema}>
        <div className="line1">
          <span className="input-group">
            <label htmlFor="name">Nome:</label>
            <span>
              <Input name="name" id="name" placeholder="Nome do favorecido" />
            </span>
          </span>
        </div>
        <div className="line2">
          <span className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <span>
              <Input name="cpf" id="cpf" placeholder="CPF" />
            </span>
          </span>
          <span className="input-group">
            <label htmlFor="mobile">Celular:</label>
            <span>
              <Input name="mobile" id="mobile" placeholder="Celular" />
            </span>
          </span>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn-back"
            onClick={() => {
              history.push('/favoreds');
            }}
          >
            <MdArrowBack />
            Voltar
          </button>
          <div>
            <button type="submit" className="btn-confirm" disabled={loading}>
              {loading ? (
                <FaSpinner color="#fff" size={14} />
              ) : (
                <>
                  <MdDone />
                  Cadastrar favorecido
                </>
              )}
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}

FavoredNew.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
