function grades(marks){
  if (marks >= 79 && marks < 100) {
    return "A"
  }
  else if(marks < 79 && marks >= 60){
    return "B"
  }
  else if (marks <59 && marks >= 49){
    return "C"
  }

else if (marks <49 && marks >=41){
   return  "D"
}
else if (marks< 40 && marks >0 ){
  return "E"
}
  
}

console.log(grades(15));



function speedDetector(speed) {
  let demeritPts;
  let myMessage;

  if (speed < 70) {
      myMessage='OK';
  }else if(speed > 75 && speed < 135){

      demeritPts=Math.floor((speed-70)/5);
      myMessage=' Points: '+demeritPts;
      if (demeritPts>12){
          myMessage=myMessage+' License suspended';
      }
  }else{
      myMessage='Slowed down the speed limit is exceeded'; //for speeds between 70 and 74 .
  }

  return myMessage;
}

console.log(speedDetector(180));




//Step 1: Calculate nhif deduction amount
function nhifCalc(grosspay) {
  let nhifDeduct;
  let maxNhifDeduct;
  <br></br>
  let lowerBoundArray=[0, 6000, 8000, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000];

<br></br>
  let upperBoundArray=[5999, 7999, 11999, 14999, 19999, 24999, 29999, 34999, 39999, 44999, 49999, 59999, 69999, 79999, 89999, 99999];

  <br></br>
  let nhifDeductArray=[150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];
  
  
  maxNhifDeduct = nhifDeductArr[nhifDeductArray.length-1]; // for pay above 100,000, max nhif deduction is fixed at 1,700

  for (let i = 0; i < lowerBoundArray.length; i++) {
      if (i===lowerBoundArr.length-1){
          return maxNhifDeduct;           

      }else{
          if (grosspay>=lowerBoundArray[i] & grosspay<=upperBoundArray[i]){
              return nhifDeductArray[i];
          }
      }
  }

}

//Step 2: Calculate paye before personal relief
function payeBeforeReliefCalc(grosspay){
  let taxableIncome;
  const pension=200;
  let paye;

  // sub Step 1: Get taxable income
  taxableIncome = grosspay-pension;

  // sub Step 2: Now calculate paye
  const taxAmount1=24000*10/100;
  const taxAmount2=(32333-24000)*25/100;

  if(taxableIncome  > 32333) {
      paye = taxAmount1 +taxAmount2 + (taxableIncome -32333)*30/100;
  } else if(taxableIncome  > 24000 && taxableIncome <32333) {
      paye = taxAmount1 + (taxableIncome -24000)*25/100;
  } else{
      paye = (taxableIncome )*10/100;
  }

  // sub Step 3: Return
  return paye;
}

//Step 3: Summation of all deductions
function deductionsCalc(grosspay){
  // nssf
  let nssf=200; //adopting old rates as new rates are still being contested in court
  console.log('NSSF: '+ nssf)
  // nhif
  let nhif=nhifCalc(grosspay);
  console.log('NHF: ' +nhif);

  // Personal Relief
  const personalRelief=2400;

  // Paye
  let payeBeforeRelief = payeBeforeReliefCalc(grosspay);
  let paye = payeBeforeRelief-(personalRelief);

  console.log('PAYE: ' + paye);

  // Return
  return nssf+nhif+paye;

}

//Step 4: Calculate Netpay
function netPayCalc(grosspay){

  // sub Step 1: Get deductions
  let deductions;
  deductions = deductionsCalc(grosspay);

  // sub Step 2: Get netpay
  return grosspay - deductions;
}

console.log('NETPAY: '+ netPayCalc(80000));











