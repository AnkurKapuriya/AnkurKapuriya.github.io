function clickTimeCard(){
document.getElementsByClassName("x1gd")[1].click();
}

function setValues(value,FromDate){

  var strValueNumber = String(value);

  var strValurFromDate= String(FromDate);

  document.querySelector('input[aria-label=" Person Number"]').value=strValue;

  document.querySelector('input[aria-label="dd-mmm-yyyy"]').value=strValurFromDate;
  
}
