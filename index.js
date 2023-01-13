const mToF = document.getElementById("m-f")
const fToM = document.getElementById("f-m")
const gToL = document.getElementById("g-l")
const lToG = document.getElementById("l-g")
const kToP = document.getElementById("k-p")
const pToK = document.getElementById("p-k")
const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")

const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

let meterToFeet;
let feetToMeter;
let literToGallons;
let gallonToLiter;
let kiloToPound;
let poundTokilo;
let msg1Row1;
let msg2Row1;
let msg1Row2;
let msg2Row2;
let msg1Row3;
let msg2Row3;

convertBtn.addEventListener("click", function () {
    convertUnit()
    inputNumber.value = ""
})

function convertUnit(){
     if(Number(inputNumber.value) === 1){
         meterToFeet = inputNumber.value * feet;
         msg1Row1 = `${inputNumber.value} meter = ${meterToFeet.toFixed(3)} feets`;
         mToF.innerHTML = msg1Row1;
         feetToMeter = inputNumber.value / feet;
         msg2Row1 = `${inputNumber.value} feet = ${feetToMeter.toFixed(3)} meters`;
         fToM.innerHTML = msg2Row1;

         gallonToLiter = inputNumber.value * gallon;
         msg1Row2 = `${inputNumber.value} liter = ${gallonToLiter.toFixed(3)} gallons`;
         literToGallons = inputNumber.value / gallon;
         msg2Row2 = `${inputNumber.value} gallon = ${literToGallons.toFixed(3)} liters`;
         gToL.innerHTML = msg2Row2;
         lToG.innerHTML = msg1Row2;

         kiloToPound = inputNumber.value * pound;
         msg1Row3 = `${inputNumber.value} kilo = ${kiloToPound.toFixed(3)} pounds`;
         kToP.innerHTML = msg1Row3;
         poundTokilo = inputNumber.value / pound;
         msg2Row3 = `${inputNumber.value} pound = ${poundTokilo.toFixed(3)} kilos`;
         pToK.innerHTML = msg2Row3;
     }
    else{
         meterToFeet = inputNumber.value * feet;
         msg1Row1 = `${inputNumber.value} meters = ${meterToFeet.toFixed(3)} feet`;
         mToF.innerHTML = msg1Row1;
         feetToMeter = inputNumber.value / feet;
         msg2Row1 = `${inputNumber.value} feet = ${feetToMeter.toFixed(3)} meters`;
         fToM.innerHTML = msg2Row1;

         gallonToLiter = inputNumber.value * gallon;
         msg1Row2 = `${inputNumber.value} liters = ${gallonToLiter.toFixed(3)} gallons`;
         
         literToGallons = inputNumber.value / gallon;
         msg2Row2 = `${inputNumber.value} gallons = ${literToGallons.toFixed(3)} liters`;
         gToL.innerHTML = msg2Row2;
         lToG.innerHTML = msg1Row2;

         kiloToPound = inputNumber.value * pound;
         msg1Row3 = `${inputNumber.value} kilos = ${kiloToPound.toFixed(3)} pounds`;
         kToP.innerHTML = msg1Row3;
         poundTokilo = inputNumber.value / pound;
         msg2Row3 = `${inputNumber.value} pounds = ${poundTokilo.toFixed(3)} kilos`;
         pToK.innerHTML = msg2Row3;
    }
     
}
