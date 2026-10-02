import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
    <>
      <div
        style={{
          alignContent: 'left',justifyContent: 'left',display: 'flex',backgroundColor: 'gray',borderBottom: '5px solid black'}}>
        <h1
          style={{fontFamily: 'Papyrus',fontSize: 70,paddingLeft: 400}}>
          Castaway
        </h1>
      </div>

      <div>
        <h4>Conheça o Projeto Castaway</h4>
      </div>

      <div
        style={{paddingLeft: 160,display: 'flex'}}>

        <button
          type="button"
          style={{
            backgroundColor: 'gainsboro',
            color: 'black',
            margin: 40
          }}
          onClick={() => navigate('/pedido')}
        >
          Ajude com nosso projeto de TCC,
          <br />
          preencha nosso formulário de pesquisa
        </button>


        <button
          type="button"
          style={{
            backgroundColor: 'gainsboro',
            color: 'black',
            margin: 40
          }}
          onClick={() => navigate('/sobre')}
        >
          Conheça nosso projeto
        </button>


        <button
          type="button"
          style={{
            backgroundColor: 'gainsboro',
            color: 'black',
            margin: 40
          }}
          onClick={() => {
            alert('Download da Demo')
          }}
        >
          Baixe a Demo aqui
        </button>

      </div>
    </>
  )
}

export default Home
