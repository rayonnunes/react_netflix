import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import {
  MenuWrapper,
} from './styles';
import Logo from '../../assets/Logo.png';
import Button from '../Button';

export default () => (
  <MenuWrapper>
    <Link to="/">
      <img className="Logo" src={Logo} alt="Logo Rayonix" />
    </Link>
    <Button as={Link} to="/cadastro/video">
      Novo Vídeo
    </Button>
  </MenuWrapper>
);
