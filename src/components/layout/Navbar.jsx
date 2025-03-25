import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
  padding: 1rem;
  display: block;
  transition: ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};

  &:hover {
    background: ${props => props.theme.colors.primary}20;
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
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

const DropdownContainer = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    display: none;
  }
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
  background: rgba(13, 17, 23, 0.8);
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const profileItems = [
    { path: '/sobre-mi', label: 'Sobre Mí' },
    { path: '/experiencia', label: 'Experiencia' },
    { path: '/formacion', label: 'Formación' },
    { path: '/habilidades', label: 'Habilidades' }
  ];

  const menuItems = [
    { path: '/despliegues', label: 'Despliegues' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/apuntes', label: 'Apuntes' },
    { path: '/libros', label: 'Libros' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const allMenuItems = [...profileItems, ...menuItems];

  return (
    <Nav>
      <NavLink to="/">
        <motion.span whileHover={{ scale: 1.1 }}>
          Ima MultiDev
        </motion.span>
      </NavLink>

      <NavLinks>
        <DropdownContainer
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <DropdownButton>
            Perfil {isDropdownOpen ? '▲' : '▼'}
          </DropdownButton>
          <AnimatePresence>
            {isDropdownOpen && (
              <DropdownContent
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {profileItems.map(item => (
                  <DropdownLink key={item.path} to={item.path}>
                    {item.label}
                  </DropdownLink>
                ))}
              </DropdownContent>
            )}
          </AnimatePresence>
        </DropdownContainer>
        
        {menuItems.map(item => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </NavLinks>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <AnimatePresence>
        {isMobile && isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {allMenuItems.map(item => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;