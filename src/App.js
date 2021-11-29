import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path="projects" element={<Projects />} /> 
          <Route exact path="about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
