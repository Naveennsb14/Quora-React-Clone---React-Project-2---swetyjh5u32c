import React from 'react'
import { useLocation } from 'react-router-dom'


const Searchresult = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div >
    {/* <Header /> */}
    Hi
  </div>
  )
}

export default Searchresult
