import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const JobTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`;

const CompanyName = styled.h4`
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 0.5rem;
  font-size: 1rem;
`;

const JobDetails = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
  font-size: 0.9rem;
`;

const Period = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

const SpecializationSection = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  margin-top: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const SpecializationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SpecializationItem = styled(motion.div)`
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
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
  font-weight: 500;
  text-align: center;
  margin: 2rem;
  
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const experienceData = [
  {
    id: 1,
    title: "Gestor ERP SAP",
    company: "ERRIBERRI SL",
    location: "Olite (Navarra)",
    period: "2024",
    type: "Contrato Temporal, Jornada Completa",
    logo: "/images/logos/erriberri.png"
  },
  {
    id: 2,
    title: "Programador CNC y Control de Procesos",
    company: "GKN AUTOMOTIVE",
    location: "Carcastillo (Navarra)",
    period: "2018–2023",
    type: "Contrato Indefinido, Jornada Completa",
    logo: "/images/logos/gkn.png"
  },
  {
    id: 3,
    title: "Marketing Digital y Gestión Comercial",
    company: "SUPERRECAMBIOS.COM",
    location: "Pamplona (Navarra)",
    period: "2016–2017",
    type: "Contrato Temporal, Jornada Completa",
    logo: "/images/logos/superrecambios.png"
  }
];

const specializations = [
  "Desarrollo Multiplataforma (Web, Android, iOS)",
  "Marketing Digital",
  "Inteligencia Artificial",
  "Machine Learning",
  "Programación CNC",
  "Sistemas ERP"
];

const Experience = () => {
  return (
    <ExperienceSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiencia Profesional
      </motion.h1>
      
      <ContentContainer>
        <TimelineContainer>
          {experienceData.map((job, index) => (
            <TimelineItem
              key={job.id}
              position={index % 2 === 0 ? 'left' : 'right'}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <CompanyLogo src={job.logo} alt={job.company} />
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <JobDetails>
                  <Period>{job.period}</Period>
                  <br />
                  {job.location}
                  <br />
                  {job.type}
                </JobDetails>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>

        <SpecializationSection>
          <h2>Áreas de Especialización</h2>
          <SpecializationGrid>
            {specializations.map((spec, index) => (
              <SpecializationItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {spec}
              </SpecializationItem>
            ))}
          </SpecializationGrid>
        </SpecializationSection>

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
    </ExperienceSection>
  );
};

export default Experience; 