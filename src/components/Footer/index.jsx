import * as Styled from './styles';

import logo from '../../assets/images/icons/Polygon 2.png'

function Footer() {
  return (
    <Styled.Container>
      <Styled.DivLogo>
        <img src={logo} />
        <h2>food explorer</h2>
      </Styled.DivLogo>
      <p>&copy; 2023 - Todos os direitos reservados.</p>
    </Styled.Container>
  )
}

export default Footer;