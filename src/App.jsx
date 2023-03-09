import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() { 
  const message = "WELCOME, WE CREATE EXCEPTIONAL PIECES THAT DEFINE SPACES."

  return (
    <div className='app-container'>
      <Navbar />
      <ItemListContainer greeting={message} />
    </div>
  )
}

export default App
