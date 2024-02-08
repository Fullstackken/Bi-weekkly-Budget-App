import React from "react";
import PaidBillDate from "../../current-titme";

export default function AutoInsurance (){

    function Paid(){

        let paidText = document.getElementById('auto-insurance-total');

        let paidDate = document.getElementById('paid-date-auto');

            paidText.innerText = 'PAID';

            paidDate.innerHTML = PaidBillDate();
    }

    return(
        <div className="card">
        <div className="card-body">
            <div className="auto-insurance-title" id="auto-insurance-title">Auto Insurance</div>
                <div className="auto-insurance-total" id="auto-insurance-total"
                    onClick={Paid}>127.00</div>
                    <div className="card-body">
                    <div id="paid-date-auto"></div>
                    </div>
        </div>
        </div>
    )
}