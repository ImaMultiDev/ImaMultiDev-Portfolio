import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NewsSection = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

const NewsContainer = styled.div`
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

const NewsCard = styled(motion.article)`
  background: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NewsTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 1rem;
  font-size: 1.2rem;
  line-height: 1.4;
`;

const NewsDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const NewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const NewsAuthor = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 0.9rem;
`;

const NewsDate = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.8rem;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.error};
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const NavButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  font-weight: 500;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loadingPage, setLoadingPage] = useState(false);

  const fetchNews = async (pageNum) => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${pageNum}&sort_by=published_at&sort_direction=desc`
    );
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data.filter(article => 
      article.cover_image || article.social_image
    );
  };

  const handlePageChange = async (newPage) => {
    setLoadingPage(true);
    try {
      const newArticles = await fetchNews(newPage);
      if (newArticles.length > 0) {
        setArticles(newArticles);
        setPage(newPage);
        window.scrollTo(0, 0); // Volver al inicio de la página
      }
    } catch (err) {
      console.error('Error changing page:', err);
      setError(err.message);
    } finally {
      setLoadingPage(false);
    }
  };

  useEffect(() => {
    const loadInitialNews = async () => {
      try {
        const initialArticles = await fetchNews(1);
        setArticles(initialArticles);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadInitialNews();
  }, []);

  if (loading) {
    return (
      <NewsSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            Noticias Actuales sobre Desarrollo 
        </motion.h1>
        <LoadingSpinner>Cargando noticias...</LoadingSpinner>
      </NewsSection>
    );
  }

  if (error) {
    return (
      <NewsSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            Noticias Actuales sobre Desarrollo 
        </motion.h1>
        <ErrorMessage>Error: {error}</ErrorMessage>
      </NewsSection>
    );
  }

  return (
    <NewsSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Noticias Actuales sobre Desarrollo 
      </motion.h1>
      <NewsContainer>
        <NewsGrid>
          {articles && articles.length > 0 ? (
            articles.map((article) => (
              <NewsCard
                key={article.id}
                onClick={() => window.open(article.url, '_blank')}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <NewsImage 
                  src={article.cover_image || article.social_image || '/images/default-news.jpg'} 
                  alt={article.title}
                  onError={(e) => {
                    e.target.src = '/images/default-news.jpg';
                  }}
                />
                <NewsContent>
                  <NewsTitle>{article.title}</NewsTitle>
                  <NewsDescription>
                    {article.description || 'No hay descripción disponible'}
                  </NewsDescription>
                  <NewsFooter>
                    <NewsAuthor>{article.user?.name || 'Anónimo'}</NewsAuthor>
                    <NewsDate>
                      {new Date(article.published_at).toLocaleDateString('es-ES')}
                    </NewsDate>
                  </NewsFooter>
                </NewsContent>
              </NewsCard>
            ))
          ) : (
            <ErrorMessage>No hay artículos disponibles</ErrorMessage>
          )}
        </NewsGrid>
        <NavigationButtons>
          <NavButton
            onClick={() => handlePageChange(page - 1)}
            disabled={loadingPage || page <= 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Anterior
          </NavButton>
          <NavButton
            onClick={() => handlePageChange(page + 1)}
            disabled={loadingPage || articles.length < 9}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Siguiente →
          </NavButton>
        </NavigationButtons>
      </NewsContainer>
    </NewsSection>
  );
};

export default News; 