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

else if (marks <49 && marks >=40 ){
   return  "D"
}
else if (marks< 40 && marks >= 0 ){
  return " Less than 40,E"
}
  
}

console.log(grades(45));


















