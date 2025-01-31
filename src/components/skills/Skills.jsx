import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    height: calc(100vh - 60px);
    margin-top: 40px;
  }
`;

const SkillsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-top: 10px;
  
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

const SkillCategory = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const CategoryTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const IconScrollContainer = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => Math.max(6, props.itemCount)}, minmax(80px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  min-width: min-content;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  padding-top: 0.6rem;
`;

const IconLabel = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;

const skillsData = {
  languages: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://techstack-generator.vercel.app/python-icon.svg' },
    { name: 'JavaScript', icon: 'https://techstack-generator.vercel.app/js-icon.svg' },
    { name: 'TypeScript', icon: 'https://techstack-generator.vercel.app/ts-icon.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },
  ],
  mobile: [
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Flutter', icon: 'https://skillicons.dev/icons?i=flutter' },
    { name: 'Android', icon: 'https://skillicons.dev/icons?i=androidstudio' },
  ],
  frontend: [
    { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'React', icon: 'https://techstack-generator.vercel.app/react-icon.svg' },
    { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'Vue', icon: 'https://skillicons.dev/icons?i=vue' },
    { name: 'Angular', icon: 'https://skillicons.dev/icons?i=angular' }
  ],
  databases: [
    { name: 'MySQL', icon: 'https://techstack-generator.vercel.app/mysql-icon.svg' },
    { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
    { name: 'SQLite', icon: 'https://skillicons.dev/icons?i=sqlite' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'Django', icon: 'https://techstack-generator.vercel.app/django-icon.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'FastAPI', icon: 'https://skillicons.dev/icons?i=fastapi' },

  ],
  devTools: [
    { name: 'Git', icon: 'https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png' },
    { name: 'GitHub', icon: 'https://techstack-generator.vercel.app/github-icon.svg' },
    { name: 'AWS', icon: 'https://techstack-generator.vercel.app/aws-icon.svg' },
    { name: 'Google Cloud', icon: 'https://skillicons.dev/icons?i=googlecloud' },
    { name: 'Microsoft Azure', icon: 'https://skillicons.dev/icons?i=azure' },
    { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
    { name: 'Kubernetes', icon: 'https://skillicons.dev/icons?i=kubernetes' },
    { name: 'GitLab', icon: 'https://skillicons.dev/icons?i=gitlab' },
    { name: 'TensorFlow', icon: 'https://skillicons.dev/icons?i=tensorflow' }
  ],
  styling: [
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Sass', icon: 'https://skillicons.dev/icons?i=sass' },
  ],





};

const Skills = () => {
  return (
    <SkillsSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Habilidades
      </motion.h1>
      <SkillsContainer>
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category}>
            <CategoryTitle>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryTitle>
            <IconScrollContainer>
              <IconGrid itemCount={skills.length}>
                {skills.map((skill) => (
                  <IconWrapper
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon src={skill.icon} alt={skill.name} />
                    <IconLabel>{skill.name}</IconLabel>
                  </IconWrapper>
                ))}
              </IconGrid>
            </IconScrollContainer>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 