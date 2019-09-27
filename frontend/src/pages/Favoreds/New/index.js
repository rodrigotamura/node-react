import React from 'react';
import { MdPeople, MdArrowBack, MdDelete, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function FavoredNew() {
  return (
    <Container>
      <h1>
        <MdPeople />
        <span>Favorecidos</span>
      </h1>

      <Form>
        <div className="line1">
          <span className="input-group">
            <label htmlFor="name">Nome:</label>
            <Input name="name" id="name" placeholder="Nome do favorecido" />
          </span>
        </div>
        <div className="line2">
          <span className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <Input name="cpf" id="cpf" placeholder="CPF" />
          </span>
          <span className="input-group">
            <label htmlFor="mobile">Celular:</label>
            <Input name="mobile" id="mobile" placeholder="Celular" />
          </span>
        </div>
        <div className="buttons">
          <button type="button" className="btn-back">
            <MdArrowBack />
            Voltar
          </button>
          <div>
            <button type="button" className="btn-confirm">
              <MdDone />
              Cadastrar favorecido
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
