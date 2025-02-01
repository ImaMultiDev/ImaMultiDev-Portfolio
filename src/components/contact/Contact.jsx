import { useState } from 'react';
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

const SuccessMessage = styled(motion.div)`
  color: #4caf50;
  background: ${props => props.theme.colors.card};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  color: #f44336;
  background: ${props => props.theme.colors.card};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
  text-align: center;
`;

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Opcional: resetear el estado después de 5 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <ContactSection>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </motion.h1>
      <ContactForm 
        name="contact" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="to" value="imamultidev@gmail.com" />
        
        <Input 
          type="text" 
          name="name"
          placeholder="Nombre" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea 
          name="message"
          placeholder="Mensaje" 
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </ContactForm>

      {status === 'success' && (
        <SuccessMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¡Mensaje enviado correctamente! Gracias por contactar.
        </SuccessMessage>
      )}

      {status === 'error' && (
        <ErrorMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
        </ErrorMessage>
      )}
    </ContactSection>
  );
};

export default Contact; 