

import React from 'react'
import Quote from './Quote'
import QuotesData from './QuotesData'

import './Quote.css';
// - Qoute genarator-List of objects - number of qoutes
// - Well be enforced on the browser using an higher order function



function App() {
   var quoteComponent = QuotesData.map(   (value) => <Quote key={value.id} imgUrl={value.imgUrl} quote={value.quote} quoter={value.quoter}/>)
  return (
    <div className='cards'>
      {quoteComponent}
      





      
      
      {/* <Quote 
      quote='Act as if what you do makes a difference. It does.'
      quoter='William James'
      />
      <Quote 
      quote='Success is not final, failure is not fatal: it is the courage to continue that counts.'
      quoter='Winston Churchill'
      />
      <Quote 
      quote='Never bend your head. Always hold it high. Look the world straight in the eye.'
      quoter='Helen Keller'
      /><Quote 
      quote='What you get by achieving your goals is not as important as what you become by achieving your goals.'
      quoter='Zig Ziglar'
      /><Quote 
      quote="When you have a dream, you've got to grab it and never let go."
      quoter='Carol Burnett'
      /><Quote 
      quote="No matter what you're going through, there's a light at the end of the tunnel."
      quoter='Demi Lovato'
      /> */}
    </div>
  )
}

export default App
