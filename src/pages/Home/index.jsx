import * as Styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/UIElements/Card';

export function Home() {
  return (
    <Styled.Container>
      <Header />
      <Card />
      <Footer />
    </Styled.Container>
  )
}