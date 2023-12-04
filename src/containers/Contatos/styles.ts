import styled from 'styled-components'

export const AreaContatos = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 300px;
  max-height: 80vh;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9933ff; /* Cor do polegar da scrollbar */
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Cor do track da scrollbar */
    border-radius: 6px;
  }
`
