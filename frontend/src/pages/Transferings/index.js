import React from 'react';
import { MdArrowBack, MdDelete, MdDone } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import iconHeader from '~/assets/vaadin-money-exchange.svg';

import { Container } from './styles';

export default function Transferings() {
  const options = [
    { id: 1, title: 'Debora Tamura' },
    { id: 2, title: 'Levi Tamura' },
    { id: 3, title: 'Hadassa Tamura' },
    { id: 4, title: 'Linhares' },
  ];

  return (
    <Container>
      <h1>
        <img src={iconHeader} />
        <span>Nova transferência</span>
      </h1>

      <Form>
        <div className="line1">
          <span className="input-group">
            <label htmlFor="name">Favorecido(a):</label>
            <Select name="name" id="name" options={options} />
          </span>
          <span className="account">Conta: 123123123</span>
        </div>
        <div className="line2">
          <span className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <span>123.321.123-34</span>
          </span>
          <span className="input-group">
            <label htmlFor="mobile">Celular:</label>
            <span>51 23423 1232</span>
          </span>
        </div>

        <div className="line3">
          <span className="input-group">
            <label htmlFor="value">Valor a ser transferido:</label>
            <span>R$</span>
            <Input type="number" id="value" name="value" />
          </span>

          <button type="button" className="btn-confirm">
            <MdDone />
            Transferir agora
          </button>
        </div>
        <div className="buttons">
          <button type="button" className="btn-back">
            <MdArrowBack />
            Voltar
          </button>
        </div>
      </Form>
    </Container>
  );
}
