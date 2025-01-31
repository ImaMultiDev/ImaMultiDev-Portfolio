import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loading from './components/common/Loading';
import Skills from './components/skills/Skills';
import News from './components/news/News';

// Lazy loading de componentes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./components/projects/Projects'));
const Books = lazy(() => import('./components/books/Books'));
const Notes = lazy(() => import('./components/notes/Notes'));
const Contact = lazy(() => import('./components/contact/Contact'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
