import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.colors.primary};
`;

const Loading = () => (
  <LoadingContainer>
    <h2>Cargando...</h2>
  </LoadingContainer>
);

export default Loading; 