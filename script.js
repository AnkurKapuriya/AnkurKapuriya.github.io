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


function selectHighest(){
  
const tableBody=document.querySelector('table.x1hg.x1i4 > tbody');
const rows = tableBody.childNodes;

let set=0;
let assignNum;
rows.forEach(row => {
    // Within each row, select all cells
    row = row.querySelector('tr');
    const cells = row.querySelectorAll('td:nth-child(2) > div > table > tbody > tr > td');
    
    let number = cells[2];
    let status = cells[3];			
    let active = number.textContent.trim().split('-')[1];
    assignNum = number.textContent.trim().split('-')[0];

    if(status.textContent.trim()==='Active - Payroll Eligible')
	{
	  	if(active>set)
		{
		   set=active;
		}
								
	}	
    
});

let combinedString = assignNum.trim() + "-" + set;
let cellContainingString;
rows.forEach(raw => {
const cells = raw.querySelectorAll('td');

cells.forEach(cell => {
    if (cell.textContent.includes(combinedString)) {
        cellContainingString = cell;
        return; // Exit the loop once found
    }
});
});

// Check if a cell containing the combined string was found
if (cellContainingString) {
    // Perform click action on the cell
    cellContainingString.click();
}
else{
	rows.forEach(row => {
    // Within each row, select all cells
    row = row.querySelector('tr');
    const cells = row.querySelectorAll('td:nth-child(2) > div > table > tbody > tr > td');
    
   
    let status = cells[3];			
    

    if(status.textContent.trim()==='Active - Payroll Eligible')
	{
	  	this.click();
	}	
    
});
}
}


function set_date(val) {
    var currYear = parseInt(document.querySelector('[id*="cd1::ys::content"]').value);
    var currMonth = parseInt(document.querySelector('[id*="cd1\\:\\:mSel\\:\\:content"]').value);
    var month_dict = {
        "Jan": 0,
        "Feb": 1,
        "Mar": 2,
        "Apr": 3,
        "May": 4,
        "Jun": 5,
        "Jul": 6,
        "Aug": 7,
        "Sep": 8,
        "Oct": 9,
        "Nov": 10,
        "Dec": 11,
    }
    var year = parseInt(val.split("-")[2]);
    var month = month_dict[val.split("-")[1]];
    var day = val.split("-")[0];
    var diff = currYear - year;

    //for year
    while (diff != 0) {
        if (diff > 0) {
            document.querySelector('[id*="cd1::ys::decrement"]').click();
            diff--;
        }
        else {
            document.querySelector('[id*="cd1::ys::increment"]').click();
            diff++;
        }
    }

    //for month
    diff = currMonth - month;
    while (diff != 0) {
        if (diff > 0) {
            document.querySelector('[title="Previous Month"]').click();
            diff--;
        }
        else {
            document.querySelector('[title="Next Month"]').click();
            diff++;
        }
    }

    //for day
    Array.from(document.getElementsByClassName('x12k')).forEach(cell => {
    if(+cell.innerText == +day){
        cell.click();
    }
})
}

function isFirstTabEmpty() {
    var element = document.getElementsByClassName("x2hi")[0];
    if (element) {
        return element.innerText.trim() === '';
    } else {
        // Handle case when no element with class name "x2hi" is found
        return false; // or true depending on your requirement
    }
}

