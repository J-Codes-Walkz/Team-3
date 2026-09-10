//get day from users device
const d = new Date();
let day = d.getDay();

//assign html elements to js elements to use later in conditional statments
var mondayEvents = document.getElementById("monday");
var tuesdayEvents = document.getElementById("tuesday");
var wednesdayEvents = document.getElementById("wednesday");
var thursdayEvents = document.getElementById("thursday");
var fridayEvents = document.getElementById("friday");
var saturdayEvents = document.getElementById("saturday");
var sundayEvents = document.getElementById("sunday");

//order event timtable based on current day to show todays events first
if (day === 0) 
     mondayEvents.style.order = 1, tuesdayEvents.style.order = 2, wednesdayEvents.style.order = 3, thursdayEvents.style.order = 4, fridayEvents.style.order = 5, saturdayEvents.style.order = 6, sundayEvents.style.order = 0; 
else if (day === 1) 
     mondayEvents.style.order = 0, tuesdayEvents.style.order = 1, wednesdayEvents.style.order = 2, thursdayEvents.style.order = 3, fridayEvents.style.order = 4, saturdayEvents.style.order = 5, sundayEvents.style.order = 6; 
else if (day === 2) 
     mondayEvents.style.order = 6, tuesdayEvents.style.order = 0, wednesdayEvents.style.order = 1, thursdayEvents.style.order = 2, fridayEvents.style.order = 3, saturdayEvents.style.order = 4, sundayEvents.style.order = 5; 
else if (day === 3) 
     mondayEvents.style.order = 5, tuesdayEvents.style.order = 6, wednesdayEvents.style.order = 0, thursdayEvents.style.order = 1, fridayEvents.style.order = 2, saturdayEvents.style.order = 3, sundayEvents.style.order = 4;
else if (day === 4) 
     mondayEvents.style.order = 4, tuesdayEvents.style.order = 5, wednesdayEvents.style.order = 6, thursdayEvents.style.order = 0, fridayEvents.style.order = 1, saturdayEvents.style.order = 2, sundayEvents.style.order = 3;
else if (day === 5) 
     mondayEvents.style.order = 3, tuesdayEvents.style.order = 4, wednesdayEvents.style.order = 5, thursdayEvents.style.order = 6, fridayEvents.style.order = 0, saturdayEvents.style.order = 1, sundayEvents.style.order = 2;
else if (day === 6) 
     mondayEvents.style.order = 2, tuesdayEvents.style.order = 3, wednesdayEvents.style.order = 4, thursdayEvents.style.order = 5, fridayEvents.style.order = 6, saturdayEvents.style.order = 0, sundayEvents.style.order = 1;
else {}

