import styled from "@emotion/styled";
import { motion } from "framer-motion";
import OptimizedImage from "../shared/OptimizedImage";
import { getOptimizedImage } from "../../config/images";

const BooksSection = styled.section`
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
    background: ${(props) => props.theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const BookshelfContainer = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(159px, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 1rem 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 250px;
    margin: 0 auto;
  }
`;

const BookCard = styled.div`
  gap: 1rem;
  width: clamp(120px, 30vw, 159px);
  height: clamp(170px, 42vw, 225px);

  @media (max-width: 480px) {
    width: 159px;
    height: 225px;
  }
`;

const BookCover = styled(OptimizedImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const BookTitle = styled.h3`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0.5rem 0 0;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  text-align: center;
  cursor: pointer;
`;

const books = [
  {
    id: 1,
    title: "Odoo Development",
    description: "Odoo Development",
    imageKey: "odoo",
    pdfUrl:
      "https://www.canva.com/design/DAGbdxfpAOU/prBNKme7PmXFBPR4kiyYeQ/edit?utm_content=DAGbdxfpAOU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", // "https://drive.google.com/file/d/1S7IJeifVpNcg_SSxmTsFliBT4w_OA-8H/preview"
  },
  {
    id: 2,
    title: "SwiftUI Development",
    imageKey: "swiftui",
    pdfUrl:
      "https://www.canva.com/design/DAGc98_T9nA/bY9lr7PPIRQ5PTy87Ac3zQ/edit?utm_content=DAGc98_T9nA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 3,
    title: "Android Development",
    imageKey: "android",
    pdfUrl:
      "https://www.canva.com/design/DAGc0NasHXY/vSZheSE2AKU-TvxuhebT8g/edit?utm_content=DAGc0NasHXY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 4,
    title: "JIMNY.AI Project",
    imageKey: "jimnyai",
    pdfUrl: "https://jimnyai.my.canva.site/jimny-ai",
  },
  //
];

const Books = () => {
  const handleBookClick = (book) => {
    window.open(book.pdfUrl, "_blank");
  };

  return (
    <BooksSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Libros y Documentación
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
                  src={getOptimizedImage(book.imageKey).fallback}
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
