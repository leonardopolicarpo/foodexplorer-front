import * as Styled from './styles';

function Button ({ title, ...rest }) {
  return (
    <Styled.Button {...rest}>
      {title}
    </Styled.Button>
  )
}

export default Button;