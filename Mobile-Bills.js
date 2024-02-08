import React from "react";
import PaidBillDate from "../../current-titme";

export default function Mobile(){

        function PaidPhone(){

            let paidPhoneText = document.getElementById('phone-bill-total');

            let paidDateGoogleFi = document.getElementById('paid-date-google-fi');

          

                    paidPhoneText.innerText = 'PAID';

                    paidDateGoogleFi.innerHTML = PaidBillDate();

                   
        }

        function PaidInernet(){

            let paidInternetText = document.getElementById('home-internet-total');
            let paidDateInternet = document.getElementById('paid-date-internet');
                    paidInternetText.innerText = 'PAID';
                    paidDateInternet.innerHTML = PaidBillDate();
        }


    return(
        <div className="card">
        <div className="card-body">
            <div className="mobile-title" id="mobile-title">Mobile Bills</div>
            <div className="card">
                <div className="card-body">
                    <div className="card-body">
                        <div className="phone-bill-title" id="phone-bill-title">Google-Fi</div>
                        <div className="phone-bill-total" id="phone-bill-total"
                            onClick={PaidPhone}>71.00</div>
                             <div className="card-body">
                                <div id="paid-date-google-fi"></div>
                            </div>
                    </div>
                    <div className="card-body">
                        <div className="home-internet-title" id="home-internet-title">Verizon Home Ineternet</div>
                        <div className="home-internet-title" id="home-internet-total"
                            onClick={PaidInernet}> 60.00</div>
                             <div className="card-body">
                                <div id="paid-date-internet"></div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}