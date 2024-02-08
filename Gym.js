import React from "react";
import PaidBillDate from "../../current-titme";

export default function Gym(){

    function Paid(){

        let paidText = document.getElementById('gym-total');
        let paidDate = document.getElementById('paid-date-gym');
            paidText.innerText = 'PAID';
            paidDate.innerHTML = PaidBillDate();
    }

    
    return(
        <div className="card">
            <div className="card-body">
            <div className="gym-title" id="gym-title">Gym Memebership</div>
                <div className="gym-total" id="gym-total"
                    onClick={Paid}>40.00</div>
                    <div className="card-body">
                        <div id="paid-date-gym"></div>
                    </div>
            </div>
        </div>
    )
}