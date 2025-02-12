import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  min-height: 180px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 160px;
    gap: 0.8rem;
  }
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  flex-grow: 1;
  margin: 0;
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  line-height: 1.5;

  @media (max-width: 768px) {
    line-height: 1.4;
    font-size: clamp(0.8rem, 1.6vw, 0.9rem);
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kodebidean/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ProjectsSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Proyectos
      </motion.h1>
      <ProjectsContainer>
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              whileHover={{ y: -5 }}
              onClick={() => handleProjectClick(project.html_url)}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>
                {project.description || 'No hay descripción disponible'}
              </ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;