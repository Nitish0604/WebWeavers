import React from 'react'

const PickupOptionSet = (props) => {
    const handleFinal = () => {
        props.actions.handleFinal();
    }
    return (
        <div>
            <button className='start-btn' onClick={() => handleFinal()}>Pickup couldnot be scheduled</button>
            <button className='start-btn' onClick={() => handleFinal()}>Pickup didnot take place on time</button>
        </div>
    )
}
export default PickupOptionSet