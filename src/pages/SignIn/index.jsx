import * as Styled from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icons/Polygon 1.svg'

import Input from '../../components/UIElements/Forms/Input';
import Button from '../../components/UIElements/Button';

export function SignIn() {
  const hadleLogin = (e) => {
    e.preventDefault()
    
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <img src={logo}/>
        <Styled.Title>food explorer</Styled.Title>
      </Styled.Header>
      <Styled.Form>
        <Styled.Title id='title-form' >Faça login</Styled.Title>
        <Input
          title='Email'
          type='email'
          placeholder='exemplo@exemplo.com.br'
        />
        <Input
          title='Senha'
          type='password'
          placeholder='Mínimo de 6 caracteres'
        />

        <Button
          title='Entrar'
          color={({ theme }) => theme.colors.tomato100}
          colorhover={({ theme }) => theme.colors.tomato400}
          height='40px'
          width='100%'
          onClick={hadleLogin}
        />
        <Styled.DivText>
          <Link to='/home' >Criar conta</Link>
          </Styled.DivText>
      </Styled.Form>
    </Styled.Container>
  )
}