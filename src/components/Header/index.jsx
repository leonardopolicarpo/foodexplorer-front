import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Styled from './styles';
import logo from '../../assets/images/icons/Polygon 1.svg'
import menu from '../../assets/images/icons/Menu.svg';
import close from '../../assets/images/icons/Close.png';
import receipt from '../../assets/images/icons/Receipt.png';
import search from '../../assets/images/icons/Search.svg';
import signOut from '../../assets/images/icons/SignOut.png';
import Button from '../UIElements/Button';

function Header() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [header, setHeader] = useState('main');
  const [modalMenu, setModalMenu] = useState(false);
  const [numberOfReceipts, setNumberOfReceipts] = useState(0);

  const aside = (
    <Styled.Aside>
      <Styled.DivSearch>
        <img src={search} />
        <Styled.InputSearch
          type='text'
          placeholder='Busque por pratos ou ingredientes'  
        />
      </Styled.DivSearch>
      <Styled.DivLinks>
        {isAdmin && <Link to='/createRecipe'>Novo Prato</Link>}
        <Link to='/login' >Sair</Link>
      </Styled.DivLinks>
    </Styled.Aside>
  );

  const openedMenu = (
    <Styled.Container id='menu'>
      <Link onClick={() => {
        setModalMenu(false)
        setHeader('main')
      }}>
        <img src={close} />
      </Link>
      <Styled.Title id='menuTitle' >Menu</Styled.Title>
    </Styled.Container>
  );

  const closedMenu = (
    <Styled.Container>
      <Link
        id='link-menu'
        onClick={() => {
          setModalMenu(true)
          setHeader('menu')
        }}>
        <img src={menu} />
      </Link>
      <Styled.DivTitle>
        <img src={logo}/>
        <Styled.Title>food explorer</Styled.Title>
        {isAdmin && <Styled.Admin>admin</Styled.Admin>}
      </Styled.DivTitle>
      
      <Styled.DivSearch className='searchHeader'>
        <img src={search} />
        <Styled.InputSearch
          type='text'
          placeholder='Busque por pratos ou ingredientes'  
        />
      </Styled.DivSearch>

      <div id='receipt' >
        {!isAdmin && <Link><img src={receipt} /></Link>}
        {!isAdmin ?
          <Button
            title={<><img src={receipt} /> Pedidos ({numberOfReceipts})</>}
            width='216px'
            height='44px'
            color='#750310'
            id='btnReceipt'
          /> :
          <Button
            title='Novo prato'
            width='216px'
            height='44px'
            color='#750310'
        />}
      </div>

      <Link id='signOut' to='/' ><img src={signOut} /></Link>
    </Styled.Container>
  );

  return (
    <>
      {header === 'main' && closedMenu}
      {header === 'menu' && openedMenu}
      {modalMenu && aside}
    </>
  )
}

export default Header;