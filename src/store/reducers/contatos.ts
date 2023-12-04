import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: '',
      telefone: '',
      email: '',
      id: 1
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexDoContato > 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrarContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome ||
          contato.email.toLowerCase() === action.payload.email ||
          contato.telefone.toLowerCase() === action.payload.telefone
      )

      if (contatoExiste) {
        alert('Este contato já existe!')
        return
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]

        const contatoNova = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }

        state.itens.push(contatoNova)
      }
    }
  }
})

export const { removerContato, editarContato, cadastrarContato } =
  contatoSlice.actions

export default contatoSlice.reducer
