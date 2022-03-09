import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './views/bloj';
import MovieList from './components/lista_pelicula';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList></MovieList>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;