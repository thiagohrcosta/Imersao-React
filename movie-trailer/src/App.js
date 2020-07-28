import React from 'react';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';

import dadosIniciais from './data/dados_iniciais.json';
function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de batalha quando é preso e torturado por policiais."}        
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
    </div>
  );
}

export default App;
