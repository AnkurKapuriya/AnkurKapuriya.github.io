function clickTimeCard(){
document.getElementsByClassName("x1gd")[1].click();
}

function setValues(value,FromDate,ToDate){

  var strValueNumber = String(value);

  var strValurFromDate= String(FromDate);

  var strValurToDate= String(ToDate);
  
  document.querySelector('input[aria-label=" Person Number"]').value=strValueNumber;

  document.querySelectorAll('input[aria-label="dd-mmm-yyyy"]')[0].value=strValurFromDate;

  document.querySelectorAll('input[aria-label="dd-mmm-yyyy"]')[1].value=strValurToDate;
  
}

function ClickCreateButton(){
  document.querySelector('div[title="Create"]').click();
}

function ClickArrow()
{
  document.querySelector('a[title="No results found."]').click();
}

function ClickSearch()
{
  document.querySelector('a.x1o4.xmv').click();
}
