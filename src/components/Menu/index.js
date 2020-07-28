import React from 'react';
import './Menu.css'
import Logo from '../../assets/Logo.png';
import Button from '../Button';

export default () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Rayonix" />
      </a>
      <Button className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}