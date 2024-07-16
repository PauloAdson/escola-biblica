import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Cadastro } from './components/Cadastro/Cadastro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path='/cadastro' element={
            <>
              <Cadastro/>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
