import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  cpf: Yup.string().required('CPF obrigatório'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ cpf }) {
    dispatch(signInRequest(cpf));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="cpf" type="number" placeholder="Digite seu CPF" />
        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
      </Form>
    </Container>
  );
}
