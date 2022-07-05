import React from 'react'

function Form() {
  return (
      <div className='inputForm'>
          <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Tracking#" />
              <input type="text" placeholder="Address" />
          </form>
          <button className='submitBtn'>Submit</button>
      </div>
  )
}


export default Form