

function spendingForm(){
    const spendingFormInputs = `
    <form>
          <label>Location</label>
          <input class="">
        
          <label>Amount</label>
          <input class="">
        
        <button class="btn" onclick="clearSpending()">Submit</button>
    </form>
    `

    document.getElementById('spending-form').innerHTML = spendingFormInputs;

    console.log("yes, it work!")
}


function clearSpending(){
    document.getElementById('spending-form').innerHTML = " ";
}