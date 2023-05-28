import React from 'react'

const Card = ({cdata}) => {
  let bagedText;
  if(cdata.openSpots === 0){
    bagedText = "SOLD OUT"
  } else if(cdata.location === "location"){
    bagedText = "ONLINE"

  }
  return (
    <>

   <section className='card' key={cdata.id}>
   {bagedText && <div className='card-badge'>{bagedText}</div>}
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
