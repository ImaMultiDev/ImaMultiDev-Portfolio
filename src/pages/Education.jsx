import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin: 30px 20px 0 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    height: calc(100vh - 60px);
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 20px;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: ${props => props.theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'left' ? '0' : '50%'};

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${props => props.position === 'left' ? '-17px' : 'auto'};
    left: ${props => props.position === 'left' ? 'auto' : '-17px'};
    background: ${props => props.theme.colors.primary};
    border: 4px solid ${props => props.theme.colors.background};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: calc(100% - 50px);
    left: 50px;
    padding: 10px 15px;
    
    &::after {
      left: -37px;
      right: auto;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SchoolLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const Degree = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`;

const SchoolName = styled.h4`
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 0.5rem;
  font-size: 1rem;
`;

const Period = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;



const CertificationsSection = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  margin-top: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CertificationLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const CVContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const CVButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius};
  margin: 2rem;
  font-weight: 500;
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const educationData = [
  {
    id: 1,
    degree: "FPS Desarrollo de Aplicaciones Multiplataforma",
    school: "U-TAD (UNIVERSIDAD DE TECNOLOGÍA Y ARTE DIGITAL)",
    location: "Madrid",
    period: "2023–2025",
    logo: "/images/logos/utad.png"
  },
  {
    id: 2,
    degree: "FPS Programación CNC",
    school: "CIP ETI (ESCUELA TÉCNICO-INDUSTRIA)",
    location: "Tudela",
    period: "2017-2018",
    logo: "/images/logos/etitudela.png"
  },
  {
    id: 3,
    degree: "FPS Gestión Comercial y Marketing",
    school: "MARÍA ANA SANZ | CENTRO INTEGRADO",
    location: "Pamplona",
    period: "2014–2016",
    logo: "/images/logos/mariaanasanz.png"
  }
];

const certifications = [
  {
    id: 1,
    name: "Fundamentos Python",
    organization: "University of Michigan",
    year: "2023",
    logo: "/images/logos/michiganuniversidd.png"
  },
  {
    id: 2,
    name: "CCNA",
    organization: "Cisco Networking Academy",
    year: "2023",
    logo: "/images/logos/cisco.png"
  },
  {
    id: 3,
    name: "Inteligencia Artificial",
    organization: "Google Developers",
    year: "2024",
    logo: "/images/logos/googledev.png"
  },
  // ... resto de certificaciones
];

const Education = () => {
  return (
    <EducationSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Formación Académica
      </motion.h1>
      
      <ContentContainer>
        <TimelineContainer>
          {educationData.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              position={index % 2 === 0 ? 'left' : 'right'}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <SchoolLogo src={edu.logo} alt={edu.school} />
                <Degree>{edu.degree}</Degree>
                <SchoolName>{edu.school}</SchoolName>
                <Period>{edu.period}</Period>
                <p>{edu.location}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
        
        <CertificationsSection>
          <h2>Certificaciones</h2>
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CertificationLogo src={cert.logo} alt={cert.name} />
                <h3>{cert.name}</h3>
                <p>{cert.organization}</p>
                <Period>{cert.year}</Period>
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </CertificationsSection>

        <CVContainer>
          <CVButton
            href="https://www.canva.com/design/DAGdwmrzvFc/W-VEpMNEoEdWFjBmOj4ndA/edit?utm_content=DAGdwmrzvFc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver CV
          </CVButton>
        </CVContainer>
      </ContentContainer>
    </EducationSection>
  );
};

export default Education; 