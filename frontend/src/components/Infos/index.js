import React, { useState } from 'react';
import { MdInfo } from 'react-icons/md';

import { Container, Info } from './styles';

export default function Infos(props) {
  const [visible, setVisible] = useState(false);

  function handleToggleInfo() {
    setVisible(!visible);
  }

  return (
    <Container>
      <MdInfo color="#fff" size={30} onClick={handleToggleInfo} />
      <Info visible={visible}>
        <p>CPF: {props.profile.cpf}</p>
        <p>Celular: {props.profile.mobile}</p>
      </Info>
    </Container>
  );
}
