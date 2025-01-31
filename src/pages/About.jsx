import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-top: 2rem;
`;

const ProfileImageSection = styled(motion.div)`
  position: relative;
`;

const ProfileImageFrame = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme.colors.card};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 20px;
    opacity: 0.5;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoSection = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Name = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
`;

const Location = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.primary};
  line-height: 1.8;
  margin: 1.5rem 0;
`;

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const InterestTag = styled(motion.span)`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid ${props => props.theme.colors.primary}40;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  transition: ${props => props.theme.transition};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const interests = [
  "Tecnología",
  "Programación",
  "Inteligencia Artificial",
  "Sistemas ERP",
  "Automatización",
  "Marketing",
  "Diseño UI/UX"
];

const About = () => {
  return (
    <AboutSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre Mí
      </motion.h1>
      
      <ContentContainer>
        <ProfileContainer>
          <ProfileImageSection
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProfileImageFrame>
              <ProfileImage src="/images/profile.png" alt="Foto de perfil de Imanol Mugueta" />
            </ProfileImageFrame>
          </ProfileImageSection>

          <ProfileInfo>
            <InfoSection
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Name>Imanol MU</Name>
              <Location>España (Navarra)</Location>
              <Location>21 de Diciembre de 1992</Location>
              
              <Description>
                Desarrollador de aplicaciones multiplataforma con experiencia en desarrollo de
                software, inteligencia artificial y machine learning. Apasionado por la creación
                de soluciones tecnológicas de alto rendimiento y optimización de procesos en
                entornos de trabajo multifuncionales.
              </Description>

              <h3>Intereses</h3>
              <InterestsContainer>
                {interests.map((interest, index) => (
                  <InterestTag
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </InterestTag>
                ))}
              </InterestsContainer>

              <SocialLinks>
                <SocialIcon 
                  href="mailto:imanolmuguetaunsain@gmail.com"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
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
            </InfoSection>
          </ProfileInfo>

        </ProfileContainer>
      </ContentContainer>
    </AboutSection>
  );
};

export default About; 