import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NotesSection = styled.section`
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

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  
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

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const NoteCard = styled(motion.a)`
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
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 180px;
    gap: 0.8rem;
  }
`;

const NoteTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: clamp(1rem, 3vw, 1.2rem);
`;

const NoteDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  flex-grow: 1;
  margin: 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  line-height: 1.5;

  @media (max-width: 768px) {
    line-height: 1.4;
  }
`;

const NoteDate = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
`;

const notesData = [
  {
    id: 1,
    title: "Guía Spring Boot y PostgreSQL",
    description: "Una guía completa para crear una API RESTful profesional utilizando Spring Boot y PostgreSQL. Incluye buenas prácticas, seguridad y documentación.",
    link: "https://iron-pencil-c48.notion.site/Gu-a-Completa-para-Crear-una-API-RESTful-Profesional-con-Spring-Boot-y-PostgreSQL-17097500a8be804a96eef8c655e84e2d",
    date: "Enero 2025"
  },
  {
    id: 2,
    title: "Retrofit, Glide y SwipeRefreshLayout",
    description: "Guía completa sobre cómo implementar Retrofit para APIs, Glide para gestión de imágenes y SwipeRefreshLayout para actualización de contenido en Android.",
    link: "https://iron-pencil-c48.notion.site/GUIA-RetroFit-GLIDE-SwipeRefreshLayout-14c97500a8be80b5a800c6fee2ee31fc",
    date: "Diciembre 2024"
  },
  {
    id: 3,
    title: "Plantillas Android",
    description: "Colección de plantillas y estructuras base para el desarrollo de aplicaciones Android. Incluye ejemplos de layouts y componentes comunes.",
    link: "https://iron-pencil-c48.notion.site/Plantillas-Android-15c97500a8be8090a4ebf4a365564c36",
    date: "Diciembre 2024"
  },
  {
    id: 4,
    title: "Dependencias y Plugins Android",
    description: "Lista completa de dependencias y plugins esenciales para el desarrollo Android. Incluye configuraciones y casos de uso.",
    link: "https://iron-pencil-c48.notion.site/DEPENDENCIAS-Y-PLUGINS-15097500a8be80129e92f52ce950da02",
    date: "Enero 2025"
  },
  {
    id: 5,
    title: "Listado de Permisos Android",
    description: "Guía detallada sobre los permisos en Android, cuándo y cómo implementarlos correctamente en tus aplicaciones.",
    link: "https://iron-pencil-c48.notion.site/LISTADO-PERMISOS-16497500a8be80248999dde808f6f8d3",
    date: "Enero 2025"
  },
  {
    id: 6,
    title: "Gestión de Datos en Android",
    description: "Aprende sobre diferentes métodos de almacenamiento y gestión de datos en Android, incluyendo SQLite, Room y preferencias compartidas.",
    link: "https://iron-pencil-c48.notion.site/Unidad-3-GESTI-N-DE-DATOS-10c97500a8be80dc9f14c807dd3244a9",
    date: "Diciembre 2024"
  },
  {
    id: 7,
    title: "MVVM App → Firebase, Room, Dagger Hilt, Retrofit",
    description: "Guia de Proyecto de desarrollo Android con Arquitectura MVVM, implementando Firebase Auth, Room, Dagger Hilt y Retrofit.",
    link: "https://iron-pencil-c48.notion.site/MVVM-App-Firebase-Room-Dagger-Hilt-Retrofit-1a297500a8be80ff8d35d5280909a6c2",
    date: "Marzo 2025"
  },
  {
    id: 8,
    title: "Guía de Despliegue en Railway con PostgreSQL (uso de Cloudinary)",
    description: "Guia de Spring Boot para desplegar una aplicación en Railway con PostgreSQL y uso de Cloudinary para gestión de imágenes",
    link: "https://iron-pencil-c48.notion.site/Gu-a-de-Despliegue-en-Railway-con-PostgreSQL-uso-de-Cloudinary-19897500a8be801a9421c1d799eb8c78",
    date: "Febrero 2025"
  }
];

const Notes = () => {
  return (
    <NotesSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Apuntes
      </motion.h1>
      
      <ContentContainer>
        <NotesGrid>
          {notesData.map((note) => (
            <NoteCard
              key={note.id}
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NoteTitle>{note.title}</NoteTitle>
              <NoteDescription>{note.description}</NoteDescription>
              <NoteDate>{note.date}</NoteDate>
            </NoteCard>
          ))}
        </NotesGrid>
      </ContentContainer>
    </NotesSection>
  );
};

export default Notes; 
