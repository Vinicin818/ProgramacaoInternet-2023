import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import Contexto from './components/Contexto.jsx'
import Objetivo from './components/Objetivo.jsx'
import Funcionamento from './components/Funcionamento.jsx'
import Conclusao from './components/Conclusao.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
        <NavBar></NavBar>
        <Header></Header>
        <Contexto></Contexto>
        <Objetivo></Objetivo>
        <Funcionamento></Funcionamento>
        <Conclusao></Conclusao>
        <Footer></Footer>
    </>
  )
}

export default App
