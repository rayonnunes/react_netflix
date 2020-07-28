import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
function App() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="É só uma teoria | Nerdologia"
      />
      {dadosIniciais.categorias.map((categoria, index) => (
        <Carousel
          category={categoria}
          key={`categoria_${index}`}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
