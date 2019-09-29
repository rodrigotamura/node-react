import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <ReactLoading color="#000" />
      Carregando
    </Container>
  );
}
