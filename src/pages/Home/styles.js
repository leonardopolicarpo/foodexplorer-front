import { styled } from 'styled-components';
import homeImg from  '../../assets/images/home.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 0 24px;
`;

export const BoxTitle = styled.div`
    color: ${({ theme }) => theme.colors.primary300};
    font-family: Poppins;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 15px;
    border-radius: 3px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
`;

export const Image = styled.div`
  position: relative;
  top: -19px;
  left: -19px;
  width: 200px;
  height: 149px;
  background: url(${homeImg}) center/cover no-repeat;
  background-size: contain;
`;

export const DivText = styled.div`
  > h2 {
    font-size: 18px;
    font-weight: 600;
  }

  > p {
    font-size: 12px;
    font-weight: 400;
  }
`;