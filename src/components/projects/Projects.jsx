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
`;

const ProjectsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-top: 1rem;
  
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
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  min-height: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: 0.8rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  flex-grow: 1;
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.5;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 0.7rem;
  padding: 0.5rem 0;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kodebidean/repos');
        const data = await response.json();
        const sortedProjects = data.sort((a, b) => 
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setProjects(sortedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <LoadingMessage>Cargando proyectos...</LoadingMessage>;
  }

  return (
    <ProjectsSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '1rem' }}
      >
        Mis Proyectos
      </motion.h1>
      <ProjectsContainer>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)' 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>
                {project.description || 'No hay descripción disponible'}
              </ProjectDescription>
              <ProjectLink 
                href={project.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver en GitHub →
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 