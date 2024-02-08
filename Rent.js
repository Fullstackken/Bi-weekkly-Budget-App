import React from "react";
import PaidBillDate from "../../current-titme";



export default function Rent(){

    function Paid(){
        let paidText = document.getElementById('rent-total');

        let paidDate = document.getElementById('paid-date');
            
        paidText.innerText = 'PAID';

        paidDate.innerHTML = PaidBillDate();

    
    }

    return(
        <div className="card">
        <div className="card-body">
            <div className="rent-title" id="rent-title">Rent</div>
                <div className="rent-total" id="rent-total"
                    onClick={Paid}>900.00</div>
                    <div className="card-body">
                    <div id="paid-date"></div>
                    </div>
        </div>
        </div>
    )
}