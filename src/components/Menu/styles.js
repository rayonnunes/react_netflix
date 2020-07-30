import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  z-index: 999;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px) {
    heigth: 40px;
    justify-content: center;
  }
`;
