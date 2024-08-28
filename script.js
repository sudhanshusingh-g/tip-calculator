const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".tip__button");
const customTipInput = document.getElementById("custom__tip");

const peopleInput = document.getElementById("people");

const tipAmountDisplay = document.getElementById("tip__amount");
const totalAmountDisplay = document.getElementById("total__amount");

const resetButton = document.querySelector(".reset__button");


// Bill input
billInput.addEventListener("input", () => {
    enableResetButton();
    updateTotal();
});

let floatTip = 0;

// Tip selection
tipButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        tipButtons.forEach((btn)=>btn.classList.remove("active"));
        floatTip=parseFloat(button.textContent);
        button.classList.add("active");
        customTipInput.value="";
        enableResetButton();
        updateTotal();
    })
})

// Custom tip input
customTipInput.addEventListener("input",()=>{
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    floatTip=parseFloat(customTipInput.value);
    enableResetButton();
    updateTotal();
})

// People input
peopleInput.addEventListener("input",()=>{
    enableResetButton();
    updateTotal();
});




// Update total
function updateTotal(){
    const billValue=parseFloat(billInput.value) || 0;
    const peopleValue = parseInt(peopleInput.value) || 1;
    const tipValue=(billValue*floatTip/100)|| 0;
    const totalAmount=(billValue+tipValue)/peopleValue;
    tipAmountDisplay.textContent=`₹${(tipValue/peopleValue).toFixed(2)}`;
    totalAmountDisplay.textContent = `₹${totalAmount.toFixed(2)}`;
}


// Function to enable the reset button
    function enableResetButton() {
        resetButton.classList.add("active");
    }

// Reset button
resetButton.addEventListener("click",()=>{
    billInput.value="";
    tipButtons.forEach((btn)=>btn.classList.remove("active"));
    customTipInput.value="";
    peopleInput.value="";
    tipAmountDisplay.textContent="₹0.00";
    totalAmountDisplay.textContent="₹0.00";
    resetButton.classList.remove("active");
})