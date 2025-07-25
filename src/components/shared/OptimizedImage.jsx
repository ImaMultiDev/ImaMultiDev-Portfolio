import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "200px"};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;

  @media (max-width: 768px) {
    height: ${(props) => props.mobileHeight || "150px"};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.background} 25%,
    ${(props) => props.theme.colors.card} 50%,
    ${(props) => props.theme.colors.background} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ErrorPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.card};
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem;
`;

const OptimizedImage = ({
  src,
  alt,
  height = "200px",
  mobileHeight = "150px",
  priority = false,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) {
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    const imgElement = document.createElement("img");
    imgElement.src = src;

    imgElement.onload = () => {
      setLoaded(true);
      setError(false);
    };

    imgElement.onerror = () => {
      setError(true);
    };

    observer.observe(imgElement);

    return () => observer.disconnect();
  }, [src, priority]);

  if (error) {
    return (
      <ImageContainer height={height} mobileHeight={mobileHeight}>
        <ErrorPlaceholder>
          <div>
            <div>📷</div>
            <div>Error al cargar imagen</div>
          </div>
        </ErrorPlaceholder>
      </ImageContainer>
    );
  }

  return (
    <ImageContainer height={height} mobileHeight={mobileHeight}>
      {!loaded && <LoadingPlaceholder />}
      {isInView && (
        <StyledImage
          src={src}
          alt={alt}
          loaded={loaded}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? "eager" : "lazy"}
          {...props}
        />
      )}
    </ImageContainer>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  priority: PropTypes.bool,
};

OptimizedImage.defaultProps = {
  height: "200px",
  mobileHeight: "150px",
  priority: false,
};

export default OptimizedImage;
