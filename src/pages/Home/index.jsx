import * as Styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/UIElements/Card';
import Section from  '../../components/Section';

export function Home() {
  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        <Styled.BoxTitle>
          <Styled.Image />
          <Styled.DivText>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </Styled.DivText>
        </Styled.BoxTitle>

        <Section title='Refeições'>
          
        </Section>
        <Section title='Sobremesas'>
        </Section>
        <Section title='Bebidas'>
        </Section>
      </Styled.Content>
      <Footer />
    </Styled.Container>
  )
}