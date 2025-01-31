import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 100px 20px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.text.primary};
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.text.primary};
  min-height: 150px;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  font-weight: 500;
`;

const Contact = () => {
  return (
    <ContactSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </motion.h1>
      <ContactForm>
        <Input type="text" placeholder="Nombre" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Mensaje" />
        <Button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
        >
          Enviar Mensaje
        </Button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact; 