import styled from 'styled-components';

export const SecaoContato = styled.section`
  padding: 5rem 5%;
  background-color: #f9f9f9;
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--cor-texto);
`;

export const ContainerForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const GrupoForm = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #646cff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
  font-size: 1rem;

  &:focus {
    border-color: #646cff;
    outline: none;
  }
`;

export const BotaoEnviar = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #535bf2;
  }
`;