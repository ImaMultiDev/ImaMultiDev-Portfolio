import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ParticlesBackground from '../common/ParticlesBackground';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 100%;
  padding: 20px;
  margin: 0;
  background-color: ${props => props.theme.colors.background};
  @media (max-width: 480px) {
    align-items: start;
    margin-top: 100px

  }
`;

const HeroContent = styled.div`
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Name = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
  font-family: ${props => props.theme.fonts.heading};
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialContainer = styled(motion.div)`
  background: ${props => props.theme.colors.card}40;
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: inline-block;

  @media (max-width: 480px) {
    width: 200px;
    margin: 0 auto;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: center;
    justify-items: center;
  }
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.8rem;
  transition: ${props => props.theme.transition};
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ParticlesBackground />
      <HeroContent>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ima MultiDev
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Desarrollador Full Stack
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experiencias multiplataforma únicas y funcionales
        </Subtitle>
        <SocialContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
        </SocialContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;