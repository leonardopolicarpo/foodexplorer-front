import * as Styled from './styles';

const Input = ({ title, ...rest }) => {
  return (
    <Styled.Container>
      <Styled.Label>{title}</Styled.Label>
      <Styled.Input {...rest}/>
    </Styled.Container>
  )
};

export default Input;