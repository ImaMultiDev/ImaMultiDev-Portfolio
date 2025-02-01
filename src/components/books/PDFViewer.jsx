import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from '@emotion/styled';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import PropTypes from 'prop-types';

// Configurar el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ViewerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow: auto;

  @media (max-width: 768px) {
    position: absolute;
    min-height: 100vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1001;
`;

const StyledDocument = styled(Document)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const StyledPage = styled(Page)`
  max-width: 100%;
  margin: 10px 0;
  canvas {
    max-width: 100% !important;
    height: auto !important;
  }
`;

const PDFControls = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  position: sticky;
  top: 20px;
  z-index: 1002;
`;

const ControlButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  color: white;
  display: flex;
  align-items: center;
`;

const PDFViewer = ({ url, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <ViewerContainer>
      <CloseButton onClick={onClose}>Cerrar</CloseButton>
      <PDFControls>
        <ControlButton
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Anterior
        </ControlButton>
        <PageInfo>
          Página {pageNumber} de {numPages}
        </PageInfo>
        <ControlButton
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Siguiente
        </ControlButton>
        <ControlButton onClick={() => setScale(scale + 0.2)}>
          Zoom +
        </ControlButton>
        <ControlButton onClick={() => setScale(Math.max(0.4, scale - 0.2))}>
          Zoom -
        </ControlButton>
      </PDFControls>
      <StyledDocument
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Cargando PDF..."
      >
        <StyledPage 
          pageNumber={pageNumber} 
          scale={scale}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </StyledDocument>
    </ViewerContainer>
  );
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PDFViewer; 