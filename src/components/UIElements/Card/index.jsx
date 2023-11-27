import * as Styled from './styles';

import Button from '../Button';

import plus from '../../../assets/images/icons/Plus.svg'
import minus from '../../../assets/images/icons/Minus.svg'
import heart from '../../../assets/images/icons/Heart.svg'
import pencil from '../../../assets/images/icons/Pencil.svg'

import image from '../../../assets/images/Mask group-1.png'
import { useState } from 'react';

function Card() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <Styled.Container>
      <Styled.Icons
        src={isAdmin ? pencil : heart}
        id='like'
      />
      <Styled.Logo src={image} />
      <Styled.Title>Suco de maracujá &gt;</Styled.Title>
      <Styled.Description>
        Suco de maracujá gelado, cremoso, docinho.
      </Styled.Description>
      <Styled.Title id='price' >R$ 13,97</Styled.Title>
      {!isAdmin &&
      <>
        <Styled.DivQuantity>
          <button onClick={() => setCount(count - 1)}><Styled.Icons src={minus} /></button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}><Styled.Icons src={plus} /></button>
        </Styled.DivQuantity>
        <Button
          title='incluir'
          color='#750310'
          width='162px'
          height='32px'
        />
      </>}
    </Styled.Container>
  )
}

export default Card;