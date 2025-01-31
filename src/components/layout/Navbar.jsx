import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${props => `${props.theme.colors.background}F0`};
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  color: ${props => props.theme.colors.text.primary};
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background:rgba(13, 17, 23, 0.8);
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  display: block;
  transition: ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavLink to="/">
        <motion.span whileHover={{ scale: 1.5 }}>Ima MultiDev
        </motion.span>
      </NavLink>
      <NavLinks>
        <DropdownContainer
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <DropdownButton>
            Perfil {isOpen ? '▲' : '▼'}
          </DropdownButton>
          {isOpen && (
            <DropdownContent
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <DropdownLink to="/sobre-mi">Sobre Mí</DropdownLink>
              <DropdownLink to="/experiencia">Experiencia</DropdownLink>
              <DropdownLink to="/formacion">Formación</DropdownLink>
              <DropdownLink to="/habilidades">Habilidades</DropdownLink>
            </DropdownContent>
          )}
        </DropdownContainer>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/apuntes">Apuntes</NavLink>
        <NavLink to="/libros">Libros</NavLink>
        <NavLink to="/noticias">Noticias</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 