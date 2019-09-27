import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { IoMdContrast } from 'react-icons/io';
import { MdTextFields } from 'react-icons/md';

import { Container } from './styles';

export default function Signin() {
  return (
    <Container>
      <Form>
        <Input name="cpf" type="text" placeholder="Digite seu CPF" />
        <button type="submit">Entrar</button>
        <div>
          <IoMdContrast color="#fff" size={35} title="Alterar contraste" />
          <MdTextFields color="#fff" size={35} title="Tamanho da fonte" />
        </div>
      </Form>
    </Container>
  );
}
