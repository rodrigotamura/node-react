import React from 'react';
import { MdPeople, MdArrowBack, MdDelete, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function FavoredEdit() {
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
            <Input
              name="name"
              value="Debora Silveira Silva Tamura"
              id="name"
              placeholder="Nome do favorecido"
            />
          </span>
          <span className="account">Conta: 123123123</span>
        </div>
        <div className="line2">
          <span className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <Input
              name="cpf"
              value="123.321.123-43"
              id="cpf"
              placeholder="CPF"
            />
          </span>
          <span className="input-group">
            <label htmlFor="mobile">Celular:</label>
            <Input
              name="mobile"
              value="51 35233 5423"
              id="mobile"
              placeholder="Celular"
            />
          </span>
        </div>
        <div className="buttons">
          <button type="button" className="btn-back">
            <MdArrowBack />
            Voltar
          </button>
          <div>
            <button type="button" className="btn-delete">
              <MdDelete
                color="#FFF"
                size={18}
                title="Remover este favorecido"
              />
            </button>
            <button type="button" className="btn-confirm">
              <MdDone />
              Confirmar alterações
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
