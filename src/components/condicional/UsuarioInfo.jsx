import React from 'react';
import If, { Else } from './If';

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        <div>Seja Bem-vindo <strong>{usuario.nome}</strong>!</div>
      </If>

      <If test={!usuario || !usuario.nome}>
        Seja Bem-vindo <strong>Amigão</strong>!
      </If>

      <If test={usuario && usuario.nome}>
        <div>Seja Bem-vindo <strong>{usuario.nome}</strong></div>
        <Else>
          <div>Seja Bem-Vindo <strong>Amigão</strong>!</div>
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;