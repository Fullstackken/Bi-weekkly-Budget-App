

//current-check-balance-title-number button; onClick

   


    function currentCheckUpdate(){
        
        let helloTitle = `
        <form id="spending-form">
        <label for="fname">Store/Purchase Made:</label><br>
        <input type="text" id="store" name="store" value=""><br>
        <label for="lname">Amount:</label><br>
        <input type="text" id="amount" name="amount" value=""><br><br>
        <button id="btn-form" type="submit" onClick="formClosed()">Update</button>
        </form> 

        `;
        document.getElementById('edit-spending-area').innerHTML = helloTitle;
    
        console.log("hmmmm....");

    }


    function formClosed() {
        let helloTitle = ``;
        document.getElementById('edit-spending-area').innerHTML = helloTitle;
    }