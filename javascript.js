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














