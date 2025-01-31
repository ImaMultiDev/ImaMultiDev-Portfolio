import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const FooterContainer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.card}80;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: clamp(0.5rem, 2vw, 0.8rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    position: sticky;
    margin-top: auto;
    padding: 0.5rem;
  }
`;

const PersonalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: clamp(0.5rem, 2vw, 1rem);
`;

const Name = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-right: clamp(0.5rem, 2vw, 1rem);
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.text.primary};
  font-size: clamp(1rem, 3vw, 1.2rem);
  padding: 0.3rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer = () => {
  const location = useLocation();
  const shouldShow = location.pathname !== '/' && location.pathname !== '/sobre-mi';

  return (
    <AnimatePresence>
      {shouldShow && (
        <FooterContainer
          as={motion.footer}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <PersonalInfo>
            <Name>Ima MultiDev</Name>
          </PersonalInfo>
          
          <SocialLinks>
            <SocialIcon 
              href="mailto:imanolmuguetaunsain@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon 
              href="https://github.com/kodebidean"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://www.linkedin.com/in/imanol-mugueta-unsain/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="https://x.com/KodeBidean"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="https://www.instagram.com/ima_munsa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </SocialIcon>
          </SocialLinks>
        </FooterContainer>
      )}
    </AnimatePresence>
  );
};

export default Footer; 