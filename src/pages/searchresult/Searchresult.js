import React from 'react'
import { Header } from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Widget from '../../components/widget/Widget'

const Searchresult = () => {
  return (
    <div >
    <Header />
    <div className="quora__contents" >
      <div className="quora__content">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  </div>
  )
}

export default Searchresult
