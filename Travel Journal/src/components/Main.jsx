import React from 'react'


import data from "../data"

const Main = () => {
  return (
    <>
    {data.map((item,index)=>{
        return(

            <div className="card" key={index}>
        <img src={item.imageUrl} alt="img" />
        <div className="card-info">

            <p> {item.localtion}</p><span><a href={item.googleMapsUrl}>View on Google Maps</a></span>
            <h1>{item.title}</h1>
            <p>{item.startData} - {item.endDate}</p>
            <p className='desp'>{item.description}</p>
        </div>

      </div>

        )
    })}
    
     
    
    </>
  )
}

export default Main
