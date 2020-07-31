import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

function CadastroCategoria(){

  useState('Filmes');

  return (
    <PageDefault>
    <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

    <form action="">
      {/* State */}
      <label htmlFor="">
        Nome da Categoria:
        <input type="text" />
      </label>
    </form>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;