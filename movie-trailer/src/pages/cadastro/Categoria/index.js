import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

function CadastroCategoria(){

  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  return (
    <PageDefault>
    <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

    <form action="">
      {/* State */}
      <label htmlFor="">
        Nome da Categoria:
        <input type="text"
        value={nomeDaCategoria}
        onChange={function funcaoHandler(infoDoEvento){
          console.log(nomeDaCategoria);
          console.log('[infoDoEvento.target.value]',infoDoEvento.target.value);
          setNomeDaCategoria(infoDoEvento.target.value);
        }} />
      </label>
    </form>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;