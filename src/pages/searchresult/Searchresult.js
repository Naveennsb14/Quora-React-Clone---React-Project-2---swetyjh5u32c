import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../components/header/Header';
import Searchcomponent from '../../components/searchcomponent/Searchcomponent';
// import Postbox from '../../components/postbox/Postbox';



const Searchresult = () => {
  const [searchedData, setSearchedData]=useState();// state for showing the search result
  const location = useLocation();
  useEffect(() => {
    // Use useEffect to avoid infinite re-renders
    if (location.state && location.state.finalResult) {
      setSearchedData(location.state.finalResult);
    }
  }, [location.state]);

  console.log('result', searchedData);
  // const {} = searchedData

  return (
    <div >
    <Header />
    <div className="quora__searchResult">
      {
        searchedData?.map((search)=>{
          return <Searchcomponent details={search} key={searchedData._id}/>

        })
      }
    </div>

  </div>
  )
}

export default Searchresult
