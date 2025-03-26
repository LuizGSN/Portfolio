import React from 'react';
import {
  SecaoContato,
  TituloSecao,
  ContainerForm,
  GrupoForm,
  Label,
  Input,
  TextArea,
  BotaoEnviar
} from './estilos';

function Contato() {
  return (
    <SecaoContato id="contato">
      <TituloSecao>Entre em Contato</TituloSecao>
      <ContainerForm>
        <form>
          <GrupoForm>
            <Label htmlFor="nome">Nome:</Label>
            <Input type="text" id="nome" required />
          </GrupoForm>
          <GrupoForm>
            <Label htmlFor="email">E-mail:</Label>
            <Input type="email" id="email" required />
          </GrupoForm>
          <GrupoForm>
            <Label htmlFor="mensagem">Mensagem:</Label>
            <TextArea id="mensagem" rows="5" required></TextArea>
          </GrupoForm>
          <BotaoEnviar type="submit">Enviar Mensagem</BotaoEnviar>
        </form>
      </ContainerForm>
    </SecaoContato>
  );
}

export default Contato;