import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './style'

const Header = () => {
  const { itens: contatos } = useSelector(
    (state: RootReducer) => state.contatos
  )
  return (
    <S.container>
      <h1>Rede de Contatos</h1>
      <br />
      <h3>{contatos.length} contatos na agenda</h3>
    </S.container>
  )
}

export default Header
