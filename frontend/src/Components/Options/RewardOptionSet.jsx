import React from 'react'

const RewardOptionSet = (props) => {
    const handleFinal = () => {
        props.actions.handleFinal();
    }
    return (
        <div>
            <button className='start-btn' onClick={() => handleFinal()}>Unable to redeem coupons</button>
            <button className='start-btn' onClick={() => handleFinal()}>Waste disposed but coins not updated</button>
        </div>
    )
}
export default RewardOptionSet;