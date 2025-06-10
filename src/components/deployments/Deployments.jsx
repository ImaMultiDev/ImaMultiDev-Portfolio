import styled from "@emotion/styled";
import { motion } from "framer-motion";

const DeploymentsSection = styled.section`
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

const DeploymentsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const DeploymentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const DeploymentCard = styled(motion.article)`
  background: ${(props) => props.theme.colors.card};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 0.3rem;
  }
`;

const DeploymentImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const DeploymentContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const DeploymentTitle = styled.h3`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0 0 1rem;
  font-size: clamp(1rem, 3vw, 1.2rem);
  line-height: 1.4;
`;

const DeploymentDescription = styled.p`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  line-height: 1.6;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    line-height: 1.4;
  }
`;

const DeploymentFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const DeploymentDate = styled.span`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
`;

const deploymentsData = [
  {
    id: 1,
    title: "REAL o IA Game",
    description: "Juega ahora a REAL o IA Game",
    image: "/images/webs/realoia.png",
    url: "https://realoia.netlify.app/",
    date: "2024-02-03",
  },
  {
    id: 2,
    title: "Real o IA API Gallery",
    description: "API REST de galería de imágenes del juego Real o IA",
    image: "/images/webs/realoiaapigallery.png",
    url: "https://real-o-ia-api-gallery.netlify.app/",
    date: "2024-02-05",
  },
  {
    id: 3,
    title: "Gallery API REST",
    description:
      "Consumir una API REST de galería de imágenes y subir tus imágenes",
    image: "/images/webs/galleryapirest.png",
    url: "https://galleryapirest.netlify.app/",
    date: "2024-03-05",
  },
  {
    id: 4,
    title: "JIMNY.AI Landing Page",
    description: "Landing Page del proyecto JIMNY.AI",
    image: "/images/webs/jimny-lp.png",
    url: "https://jimny.netlify.app/",
    date: "2025-05-11",
  },
  {
    id: 5,
    title: "Multidev Station",
    description:
      "Estación multidesarrollo para la documentación de proyectos, frameworks, herramientas,...",
    image: "/images/webs/multidevstation.png",
    url: "https://multidevstation.netlify.app/",
    date: "2025-06-10",
  },
];

const Deployments = () => {
  return (
    <DeploymentsSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Despliegues
      </motion.h1>
      <DeploymentsContainer>
        <DeploymentsGrid>
          {deploymentsData.map((deployment) => (
            <DeploymentCard
              key={deployment.id}
              onClick={() => window.open(deployment.url, "_blank")}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <DeploymentImage src={deployment.image} alt={deployment.title} />
              <DeploymentContent>
                <DeploymentTitle>{deployment.title}</DeploymentTitle>
                <DeploymentDescription>
                  {deployment.description}
                </DeploymentDescription>
                <DeploymentFooter>
                  <DeploymentDate>
                    {new Date(deployment.date).toLocaleDateString("es-ES")}
                  </DeploymentDate>
                </DeploymentFooter>
              </DeploymentContent>
            </DeploymentCard>
          ))}
        </DeploymentsGrid>
      </DeploymentsContainer>
    </DeploymentsSection>
  );
};

export default Deployments;
