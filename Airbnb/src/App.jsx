import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Heroimage from './component/Heroimage'
import Card from './component/Card'
import data from  "./data"

const App = () => {
 const card = data.map((item)=>{
  console.log(item.id);
    return(
        <Card 
        //  key={item.id}
        //   img={item.coverImg}
        cdata={item}
        />
    )

 })

  

  
  return (
    <div className='app'>
    
      <Navbar/>
      <Heroimage/>
      <section className='card-container'>

      {card}
      </section>
     
     
    </div>
  )
}

export default App
