import * as Styled from './styles';

function Tag({ title, ...rest}) {
  return (
    <Styled.Container {...rest}>
      {title}
    </Styled.Container>
  )
}

export default Tag;