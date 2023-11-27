import * as Styled from './styles';

function Section({ title, children }) {
  return (
    <Styled.Container>
      <h2>{title}</h2>
      {children}
    </Styled.Container>
  )
}

export default Section;