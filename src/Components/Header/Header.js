import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () =>{
    return(
        <header>
            <img src={logo} alt="logo tienda ecomm" />
            <h1>TITULO DE MI PAGINA</h1>
            <nav>
                <a href="">Categoria 1</a>
                <a href="">Categoria 2</a>
                <a href="">Categoria 3</a>
                <a href="">Categoria 4</a>
            </nav>
            <ShoppingCartIcon color="primary" fontSize="large"/>
        </header>
    )
}

export default Header