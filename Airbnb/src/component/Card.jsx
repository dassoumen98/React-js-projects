import React from 'react'

const Card = ({cdata}) => {
  return (
    <>
    <section className='card' key={cdata.id}> 
    <img src={`src/assets/${cdata. coverImg}`} alt="card" />
    <div>
        <img src="\src\assets\star.png" alt="star" />
        <span>{cdata.stats.rating}</span>
        <span>({cdata.stats.reviewCount})</span>
        <span>.USA</span>

        <p>{cdata.title}</p>
        
        <span>From ${cdata.price}</span><span>/ person</span>
    </div>

    </section>
      
    </>
  )
}

export default Card
