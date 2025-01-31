import { ThemeProvider } from '@emotion/react';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from '../common/ParticlesBackground';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: #0D1117;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.body};
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;

const MainContent = styled.main`
  margin-top: 80px;
  flex: 1;
  position: relative;
  z-index: 2;

`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <LayoutContainer>
      <ParticlesBackground />
      <Navbar />
      <MainContent>
        {children}
        <Footer />
      </MainContent>
    </LayoutContainer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout; 