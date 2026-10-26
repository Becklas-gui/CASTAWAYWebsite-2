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


       <a
  href="https://fluffy-satoshi.itch.io/castaway-prototype-demo"
  //download="Castaway_Demo_ver_latest.zip"
  style={{
    textDecoration: 'none',
    display: 'inline-block',
    margin: 40
  }}
>
  <button
    type="button"
    style={{
      backgroundColor: 'gainsboro',
      color: 'black'
    }}
  >
    Baixe a Demo aqui
  </button>
</a>

      </div>
    </>
  )
}

export default Home
