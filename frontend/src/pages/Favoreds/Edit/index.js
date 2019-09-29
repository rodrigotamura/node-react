import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdPeople, MdArrowBack, MdDelete, MdDone } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Loading from '~/components/Loading';

import { Container } from './styles';
import api from '~/services/api';

export default function FavoredEdit({ match, history }) {
  const [loading, setLoading] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [favored, setFavored] = useState({});
  const { id } = match.params;
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    cpf: Yup.string().required('CPF obrigatório'),
    mobile: Yup.string().required('Número de celular obrigatório'),
    id: Yup.number().required(),
  });

  useEffect(() => {
    async function loadFavored() {
      setLoading(true);
      const response = await api.get(`favoreds/${id}`);

      setFavored(response.data);
      setLoading(false);
    }

    loadFavored();
  }, [id]);

  async function handleSubmit(data) {
    setLoadingSend(true);
    try {
      await api.put('favoreds', { ...data });

      toast.success('Favorecido atualizado com sucesso!');
    } catch (err) {
      toast.error(`Ops, aconteceu algo: ${err.response.data.error}`);
    }
    setLoadingSend(false);
  }

  async function handleRemove() {
    if (confirmRemove) {
      setLoadingRemove(true);
      try {
        await api.delete(`favoreds/${id}`);
        toast.success('Favorecido removido com sucesso!');
        history.push('/favoreds');
      } catch (err) {
        toast.error(`Ops, aconteceu algo: ${err.response.data.error}`);
      }

      setConfirmRemove(false);
      setLoadingRemove(false);
    } else {
      setConfirmRemove(!confirmRemove);
    }
  }

  return (
    <Container>
      <h1>
        <MdPeople />
        <span>Favorecidos</span>
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={handleSubmit} initialData={favored} schema={schema}>
          <Input name="id" type="hidden" />
          <div className="line1">
            <span className="input-group">
              <label htmlFor="name">Nome:</label>
              <span>
                <Input name="name" id="name" placeholder="Nome do favorecido" />
              </span>
            </span>
            <span className="account">Conta: {favored.account_number}</span>
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
              <button
                type="button"
                className="btn-delete"
                onClick={handleRemove}
                onMouseLeave={() => {
                  setConfirmRemove(false);
                }}
                disabled={loadingRemove}
              >
                {loadingRemove ? (
                  <FaSpinner color="#fff" size={18} />
                ) : (
                  <>
                    {confirmRemove ? (
                      <MdDone
                        color="#FFF"
                        size={18}
                        title="Confirmar remoção"
                      />
                    ) : (
                      <MdDelete
                        color="#FFF"
                        size={18}
                        title="Remover este favorecido"
                      />
                    )}
                  </>
                )}
              </button>
              <button
                type="submit"
                className="btn-confirm"
                disabled={loadingSend}
              >
                {loadingSend ? (
                  <FaSpinner color="#fff" size={18} />
                ) : (
                  <>
                    <MdDone />
                    Confirmar alterações
                  </>
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Container>
  );
}

FavoredEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
