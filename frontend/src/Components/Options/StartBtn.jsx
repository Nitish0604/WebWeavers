import React from 'react'

const StartBtn = (props) => {
    const handleHello = () => {
        props.actions.handleHello();
    }
  return (
    <div>
        <button className='start-btn' onClick={()=>handleHello()}>Let's get started!</button>
    </div>
  )
}
export default StartBtn;