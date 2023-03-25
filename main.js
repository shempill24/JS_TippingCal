const billInput = document.querySelector(".bill_input")
const tipOutput = document.querySelector(".calculation_pptip")
const totalOutput = document.querySelector('.calculation_pp')
const tipInput = document.querySelectorAll('.perc')
const numPpl = document.querySelector(".ppl_input")
const clearAll = document.querySelector('.clear')
const cusTip = document.querySelector('#custom')

let billVal=0
let tipPerc = 1
let tipTot = 0
let ppl = 1
let calTip = tipTot/ppl
let CalTot = (billVal + tipTot)/ppl

clearAll.addEventListener('click', ()=>{
    totalOutput.innerHTML = `$0.00`
    tipOutput.innerHTML = `$0.00`
    billVal= 0
    tipPerc = 1
    tipTot = 0
    ppl = 1
});

billInput.addEventListener('change', ()=>{
    billVal = parseInt(billInput.value);
    tipTot = billVal * (tipPerc/100);
    calTip = tipTot/ppl
    tipOutput.innerHTML = calTip.toFixed(2)
    CalTot =  (billVal + tipTot)/ppl
    totalOutput.innerHTML = CalTot.toFixed(2)
});

tipInput.forEach((tip) => {
    tip.addEventListener('click', ()=>{
        console.log(tip.value)
        document.querySelector("#per_5").classList.remove('active_perc');
        document.querySelector("#per_10").classList.remove('active_perc');
        document.querySelector("#per_15").classList.remove('active_perc');
        document.querySelector("#per_25").classList.remove('active_perc');
        document.querySelector("#per_50").classList.remove('active_perc');
        document.querySelector("#per_cus").classList.remove('active_perc');
        document.querySelector("#per_cus").classList.remove('display_none');
        document.querySelector("#custom").classList.add('display_none');
        tip.classList.add('active_perc');
        if(tip.value === "cust"){
            document.querySelector("#per_cus").classList.add('display_none');
            document.querySelector("#custom").classList.remove('display_none');
            cusTip.addEventListener("change", ()=>{
                tipPerc = parseInt(cusTip.value);
                tipTot = billVal * (tipPerc/100);
                calTip = tipTot/ppl
                tipOutput.innerHTML = calTip.toFixed(2)
            });
          
        }else{
            tipPerc = parseInt(tip.value);
            tipTot = billVal * (tipPerc/100);
            calTip = tipTot/ppl
            tipOutput.innerHTML = calTip.toFixed(2)
            console.log("else tip")};
    })
   
});


numPpl.addEventListener('change', () =>{
    ppl = parseInt(numPpl.value);
    calTip = tipTot/ppl;
    tipOutput.innerHTML = calTip.toFixed(2);
    CalTot = (billVal + tipTot)/ppl;
    totalOutput.innerHTML = CalTot.toFixed(2)
    console.log('num');
});

