import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { useAuth } from '../../hooks/auth';
import logo from '../../assets/images/icons/Polygon 1.svg'
import Input from '../../components/UIElements/Forms/Input';
import Button from '../../components/UIElements/Button';

export function SignIn() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const { signIn } = useAuth();

  const hadleLogin = (e) => {
    if (!email, !password) {
      toast.error('Todos os campos são obrigatórios!')
    }

    setLoading(true)
    signIn({ email, password }).finally(() => setLoading(false));
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
          id={'email'}
          title={'Email'}
          type='email'
          placeholder='exemplo@exemplo.com.br'
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          id='password'
          title={'Senha'}
          type='password'
          placeholder='Mínimo de 6 caracteres'
          onChange={e => setPassword(e.target.value)}
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
          <Link to='/register'>Criar conta</Link>
          </Styled.DivText>
      </Styled.Form>
    </Styled.Container>
  )
}