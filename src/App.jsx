import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Books from './components/books/Books';
import Contact from './components/contact/Contact';
import Notes from './pages/Notes';
import News from './components/news/News';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/experiencia" element={<Experience />} />
          <Route path="/formacion" element={<Education />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/apuntes" element={<Notes />} />
          <Route path="/libros" element={<Books />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
