import React from 'react'
import './Navbar.css'
import logo from '../../assets/sinFondo-FBlanco.png'//importa imagenes desde assets
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';; //importa iconos desde node-modules

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li><a href="">Productos</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Reservas</a></li>
            </ul>
            <img src={logo} alt="Logo Dacoba" />
            <ShoppingCartTwoToneIcon fontSize="large"/>
        </nav>
    )
}

export default Navbar