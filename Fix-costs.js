import React from 'react';
import Rent from './Costs-compoents/Rent';
import AutoInsurance from './Costs-compoents/Auto-Insurance';
import Mobile from './Costs-compoents/Mobile-Bills';
import Gym from './Costs-compoents/Gym';




export default function FixCost(){

    return(
        <div className="fix-bill-list">
            <Rent />
            <AutoInsurance />
            <Gym />
            <Mobile />
        </div>
    )
}