import { Link } from 'react-router-dom';
import * as Styled from './styles';

export function CreateRecipe() {
  return (
    <Styled.Container>
      <h1>
        <Link to='/login' >Novo prato</Link>
      </h1>
    </Styled.Container>
  )
}