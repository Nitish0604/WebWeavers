import React from 'react'

const FirstOptionSet = (props) => {
    const handlePickup = () => {
        props.actions.handlePickup();
    }
    const handleRewards = () => {
        props.actions.handleRewards();
    }
  return (
    <div>
        <button className='start-btn' onClick={()=>handlePickup()}>Pickup</button>
        <button className='start-btn' onClick={()=>handleRewards()}>Rewards</button>
    </div>
  )
}
export default FirstOptionSet