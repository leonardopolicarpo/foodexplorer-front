import * as Styled from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icons/Polygon 1.svg'

import Input from '../../components/UIElements/Forms/Input';
import Button from '../../components/UIElements/Button';

export function SignUp() {
  const hadleCreateAccount = (e) => {
    e.preventDefault()
    alert('Conta criada')
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <img src={logo}/>
        <Styled.Title>food explorer</Styled.Title>
      </Styled.Header>
      <Styled.Form>
        <Styled.Title id='title-form' >Crie sua conta</Styled.Title>
        <Input
          title='Seu nome'
          type='text'
          placeholder='Maria da Silva'
        />
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
          title='Criar conta'
          color={({ theme }) => theme.colors.tomato100}
          colorhover={({ theme }) => theme.colors.tomato400}
          height='40px'
          width='100%'
          onClick={hadleCreateAccount}
        />
        <Styled.DivText>
          <Link to='/' >Já  tenho uma conta</Link>
        </Styled.DivText>
      </Styled.Form>
    </Styled.Container>
  )
}