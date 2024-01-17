import React from 'react'
import { Header } from '../../components/header/Header'
import './underconstruction.css'

const Underconstruction = () => {
  return (
    <div>
      <Header/>
      <div className="quora__underconstructionContainer">
        <img
          src="https://bharipbahujanmahasanghaurangabad.files.wordpress.com/2018/11/website-under-construction-gif-8.gif?w=300"
          alt=""
          className="quora__underconstructionImage"
        />
      </div>
    </div>
  )
}

export default Underconstruction
