import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BooksSection = styled.section`
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

const BookshelfContainer = styled.div`
  padding: 1rem;
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
  margin-top: 1rem;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(159px, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 2rem;
`;

const BookCard = styled(motion.a)`
  width: 159px;
  height: 225px;
  position: relative;

`;

const BookCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const BookTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
`;


const books = [
  {
    id: 1,
    title: "Odoo Development",
    description: "Odoo Development",
    coverImage: "/images/books/odoo_development.jpg",
    pdfUrl: "https://www.canva.com/design/DAGbdxfpAOU/prBNKme7PmXFBPR4kiyYeQ/edit?utm_content=DAGbdxfpAOU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" // "https://drive.google.com/file/d/1S7IJeifVpNcg_SSxmTsFliBT4w_OA-8H/preview"
  },
  {
    id: 2,
    title: "SwiftUI Development",
    coverImage: "/images/books/swiftUI_development.png",
    pdfUrl: "https://www.canva.com/design/DAGc98_T9nA/bY9lr7PPIRQ5PTy87Ac3zQ/edit?utm_content=DAGc98_T9nA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 3,
    title: "Android Development",
    coverImage: "/images/books/android_development.png",
    pdfUrl: "https://www.canva.com/design/DAGc0NasHXY/vSZheSE2AKU-TvxuhebT8g/edit?utm_content=DAGc0NasHXY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  }
];

const Books = () => {
  const handleBookClick = (book) => {
    window.open(book.pdfUrl, '_blank');
  };

  return (
    <BooksSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Libros en Desarrollo
      </motion.h1>
      <ContentContainer>
        <BookshelfContainer>
          <BooksGrid>
            {books.map((book) => (
              <BookCard
                key={book.id}
                onClick={() => handleBookClick(book)}
                whileHover={{ scale: 1.05 }}
              >
                <BookCover 
                  src={book.coverImage} 
                  alt={book.title}
                />
                <BookTitle>{book.title}</BookTitle>
              </BookCard>
            ))}
          </BooksGrid>
        </BookshelfContainer>
      </ContentContainer>
    </BooksSection>
  );
};

export default Books; 