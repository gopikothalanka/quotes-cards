import React from 'react'
import './Quote.css'
function Quote (props) {
  console.log(props);

  const num=[1,2,3,4,5,6,7,8,9,10]
  let styles={
    background:`url(${props.imgUrl}) no-repeat` ,
  }
  return (
    <div className="quoteCard"  style={styles}>
      <div className='insideCard'>
      <h2>{props.quote}</h2>
      <h3 style={{color: !props.quoter && "transparent"}}>"{props.quoter}"</h3>
      </div>
    </div>
  )
}

export default Quote
