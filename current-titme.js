import React from "react";


export default function PaidBillDate(){

    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    let currentDate = `${month}.${day}.${year}`;

    return currentDate;

}