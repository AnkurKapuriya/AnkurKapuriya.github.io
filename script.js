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


function setYear(targetYear) {
    // Find the year input field
    let yearElement = document.querySelector('input.xxp');

    if (!yearElement) {
        console.error('Year input field not found.');
        return;
    }

    let currentYear = parseInt(yearElement.value, 10);
    let incrementButton = document.querySelector('a.x12y');
    let decrementButton = document.querySelector('a.x12z');

    if (targetYear > currentYear) {
        // Increase the year
        while (currentYear < targetYear) {
            incrementButton.click();
            currentYear++;
             new Promise(resolve => setTimeout(resolve, 2000)); // Delay of 2 seconds
        }
    } else if (targetYear < currentYear) {
        // Decrease the year
        while (currentYear > targetYear) {
            decrementButton.click();
            currentYear--;
             new Promise(resolve => setTimeout(resolve, 2000)); // Delay of 2 seconds
        }
    }
}

function SelectDateFromCalender(date){
	const targetDate = String(date);

// Split the target date into day, month, and year
const [day, month, year] = targetDate.split("-");

// Remove leading zero if present for day
const formattedDay = parseInt(day, 10).toString();

// Get the month abbreviation
const formattedMonth = month.substring(0, 3);



const dayElements = document.querySelectorAll('.x12k[data-afr-adfday="cm"]');
const monthElements = document.querySelectorAll('.x134');
const yearElement = document.getElementById('_FOpt1:_FOr1:0:_FONSr2:0:_FOTr1:0:r1:0:AP1:AT1:r2:0:cd1::ys::content');

dayElements.forEach(dayElement => {
    // Get the inner text of each day element
    if (dayElement.innerText === formattedDay) {
        dayElement.click();
    }
});

monthElements.forEach(monthElement => {
    // Get the inner text of each month element
    if (monthElement.innerText === formattedMonth) {
        monthElement.click();
    }
});

setYear(year);
}
