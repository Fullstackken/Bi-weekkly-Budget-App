

function spendingForm(){
    const spendingFormInputs = `
    <form>
    
        <select class="form-select" >
        <option value="Food" >Food</option>
        <option value="Transportation" >Transportation</option>
        <option value="Entertaiment" >Entertaiment</option>
        </select>
          <label>Location</label>
          <input class="">
        
          <label>Amount</label>
          <input class="" id="spending-amount">
        
        <button class="btn" onclick="spendingAmountValidated()">Submit</button>
    </form>
    `

    document.getElementById('spending-form').innerHTML = spendingFormInputs;

    console.log("yes, it work!")
}


function clearSpending(){
    document.getElementById('spending-form').innerHTML = " ";
}


function spendingAmountValidated(){
    
    let input_amount = document.getElementById("spending-amount").value;

    console.log("value:", input_amount);

    if(isNaN(input_amount)){
        console.log("Enter a number");
    }
}

function newEarningForm() {
     const new_earning_form = `
    <form>
     <div class="">
        <label class="form-label">New Earning</label>
        <input class="form-control">
    </div> 
    <div class="new-entry-submit-btn"
        onclick="clearNewEntryForm()"> Enter </div>
    </form>
    `;

    document.getElementById('new-earning-form').innerHTML = new_earning_form;
}

function clearNewEntryForm() {
    document.getElementById('new-earning-form').innerHTML = ` `;
}