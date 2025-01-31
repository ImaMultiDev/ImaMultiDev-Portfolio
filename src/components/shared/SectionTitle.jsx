import styled from 'styled-components';

const SectionTitle = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
  color: ${props => props.theme.colors.text.primary};
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 3.5vw, 1.8rem);
    margin-bottom: 1rem;
  }
`;

export default SectionTitle; 