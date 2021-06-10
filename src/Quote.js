import React from 'react'
import './Quote.css'
function Quote (props) {
  console.log(props);
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
