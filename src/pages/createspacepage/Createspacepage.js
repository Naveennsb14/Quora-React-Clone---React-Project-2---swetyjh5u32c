import React, { useContext } from 'react'
import { Header } from '../../components/header/Header'
import Cover from '../../components/cover/Cover'
import { toggleTheme } from '../../components/App'
import "./createspacepage.css"

const Createspacepage = () => {
  const {darkMode, setDarkMode} = useContext(toggleTheme)
  return (
    <div className={darkMode?'quoraCreateSpace__containerDark':'quoraCreateSpace__container'}>
      <Header/>
      <Cover/>
    </div>
  )
}

export default Createspacepage
