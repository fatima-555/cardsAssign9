import React from 'react';
import Cards from './components/Cards/Cards';
import { Data } from './components/Data/Data';

const App = () => {
  return (
    <>
      <header>
        <h1 class='site-name'> EzyMart </h1>
      </header>

      { Data ? (
        Data.map((element, index) => {
          return (<Cards key={index} image={element.image} title={element.title} is={index}
            description={element.description} price={element.price} category={element.category} rating={element.rating.rate}/>)
        })
      ) : (
        <h1> Data not fetch </h1>
      )}
    </>
  )
}

export default App
