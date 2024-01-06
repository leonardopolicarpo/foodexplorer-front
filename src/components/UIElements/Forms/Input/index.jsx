import * as Styled from './styles';

const Input = ({ id, title , ...rest }) => {
  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{title}</Styled.Label>
      <Styled.Input {...rest}/>
    </Styled.Container>
  )
};

export default Input;