//get day from users device
const d = new Date();
let day = d.getDay();

//set array of table days to use in conditional statements
const tableDays = ["monday-table", "tuesday-table", "wednesday-table", "thursday-table", "friday-table", "saturday-table", "sunday-table"];

//assign html elements to js elements to use later in conditional statments
var mondayEvents = document.getElementById("monday");
var tuesdayEvents = document.getElementById("tuesday");
var wednesdayEvents = document.getElementById("wednesday");
var thursdayEvents = document.getElementById("thursday");
var fridayEvents = document.getElementById("friday");
var saturdayEvents = document.getElementById("saturday");
var sundayEvents = document.getElementById("sunday");

//order event timtable based on current day to show todays events first
//0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday
//sunday
if (day === 0)
     mondayEvents.style.order = 1, tuesdayEvents.style.order = 2, wednesdayEvents.style.order = 3, thursdayEvents.style.order = 4, fridayEvents.style.order = 5, saturdayEvents.style.order = 6, sundayEvents.style.order = 0;
//monday
else if (day === 1)
     mondayEvents.style.order = 0, tuesdayEvents.style.order = 1, wednesdayEvents.style.order = 2, thursdayEvents.style.order = 3, fridayEvents.style.order = 4, saturdayEvents.style.order = 5, sundayEvents.style.order = 6;
//tuesday
else if (day === 2)
     mondayEvents.style.order = 6, tuesdayEvents.style.order = 0, wednesdayEvents.style.order = 1, thursdayEvents.style.order = 2, fridayEvents.style.order = 3, saturdayEvents.style.order = 4, sundayEvents.style.order = 5;
//wednesday
else if (day === 3)
     mondayEvents.style.order = 5, tuesdayEvents.style.order = 6, wednesdayEvents.style.order = 0, thursdayEvents.style.order = 1, fridayEvents.style.order = 2, saturdayEvents.style.order = 3, sundayEvents.style.order = 4;
//thursday
else if (day === 4)
     mondayEvents.style.order = 4, tuesdayEvents.style.order = 5, wednesdayEvents.style.order = 6, thursdayEvents.style.order = 0, fridayEvents.style.order = 1, saturdayEvents.style.order = 2, sundayEvents.style.order = 3;
//friday
else if (day === 5)
     mondayEvents.style.order = 3, tuesdayEvents.style.order = 4, wednesdayEvents.style.order = 5, thursdayEvents.style.order = 6, fridayEvents.style.order = 0, saturdayEvents.style.order = 1, sundayEvents.style.order = 2;
//saturday
else if (day === 6)
     mondayEvents.style.order = 2, tuesdayEvents.style.order = 3, wednesdayEvents.style.order = 4, thursdayEvents.style.order = 5, fridayEvents.style.order = 6, saturdayEvents.style.order = 0, sundayEvents.style.order = 1;
else { }





//get day checkbox elements from html to use in conditional statements
var checkMonday = document.getElementById("monday-checkbox");
var checkTuesday = document.getElementById("tuesday-checkbox");
var checkWednesday = document.getElementById("wednesday-checkbox");
var checkThursday = document.getElementById("thursday-checkbox");
var checkFriday = document.getElementById("friday-checkbox");
var checkSaturday = document.getElementById("saturday-checkbox");
var checkSunday = document.getElementById("sunday-checkbox");
//add event listeners to checkboxes to show or hide days based on user selection
//monday event listener
checkMonday.addEventListener("change", function () {
     if (checkMonday.checked) {
          mondayEvents.style.display = "block";
     }
     else {
          mondayEvents.style.display = "none";
     }

});
//tuesday event listener
checkTuesday.addEventListener("change", function () {
     if (checkTuesday.checked) {
          tuesdayEvents.style.display = "block";
     }
     else {
          tuesdayEvents.style.display = "none";
     }
     
});
//wednesday event listener
checkWednesday.addEventListener("change", function () {
     if (checkWednesday.checked) {
          wednesdayEvents.style.display = "block";
     }
     else {
          wednesdayEvents.style.display = "none";
     }
     
});
//thursday event listener
checkThursday.addEventListener("change", function () {
     if (checkThursday.checked) {
          thursdayEvents.style.display = "block";
     }
     else {
          thursdayEvents.style.display = "none";
     }
     
});
//friday event listener
checkFriday.addEventListener("change", function () {
     if (checkFriday.checked) {
          fridayEvents.style.display = "block";
     }
     else {
          fridayEvents.style.display = "none";
     }
     
});
//saturday event listener
checkSaturday.addEventListener("change", function () {
     if (checkSaturday.checked) {
          saturdayEvents.style.display = "block";
     }
     else {
          saturdayEvents.style.display = "none";
     }
     
});
//sunday event listener
checkSunday.addEventListener("change", function () {
     if (checkSunday.checked) {
          sundayEvents.style.display = "block";
     }
     else {
          sundayEvents.style.display = "none";
     }
     
});

//get location checkbox elements from html to use in conditional statements
var checkBirmingham = document.getElementById("birmingham-checkbox");
var checkLondon = document.getElementById("london-checkbox");
var checkManchester = document.getElementById("manchester-checkbox");
//add event listeners to checkboxes to show or hide locations based on user selection
//birmingham event listener
checkBirmingham.addEventListener("change", function () {
     var birminghamEvents = document.querySelectorAll(".birmingham");
     if (checkBirmingham.checked) {
          birminghamEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          birminghamEvents.forEach(function (event) {
               event.style.display = "none";

          });
          
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//london event listener
checkLondon.addEventListener("change", function () {
     var londonEvents = document.querySelectorAll(".london");
     if (checkLondon.checked) {
          londonEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          londonEvents.forEach(function (event) {
               event.style.display = "none";

          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//manchester event listener
checkManchester.addEventListener("change", function () {
     var manchesterEvents = document.querySelectorAll(".manchester");
     if (checkManchester.checked) {
          manchesterEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          manchesterEvents.forEach(function (event) {
               event.style.display = "none";

          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});

//get activity checkbox elements from html to use in conditional statements
var checkSwimming = document.getElementById("swimming-checkbox");
var checkRunning = document.getElementById("running-checkbox");
var checkDancing = document.getElementById("dancing-checkbox");
var checkYoga = document.getElementById("yoga-checkbox");
//add event listeners to checkboxes to show or hide activities based on user selection
//swimming event listener
checkSwimming.addEventListener("change", function () {
     var swimmingEvents = document.querySelectorAll(".swimming");
     if (checkSwimming.checked) {
          swimmingEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          swimmingEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//running event listener
checkRunning.addEventListener("change", function () {
     var runningEvents = document.querySelectorAll(".running");
     if (checkRunning.checked) {
          runningEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          runningEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//dancing event listener
checkDancing.addEventListener("change", function () {
     var dancingEvents = document.querySelectorAll(".dancing");
     if (checkDancing.checked) {
          dancingEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          dancingEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//yoga event listener
checkYoga.addEventListener("change", function () {
     var yogaEvents = document.querySelectorAll(".yoga");
     if (checkYoga.checked) {
          yogaEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          yogaEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});


//get time checkbox elements from html to use in conditional statements
var checkMorning = document.getElementById("morning-checkbox");
var checkAfternoon = document.getElementById("afternoon-checkbox");
var checkEvening = document.getElementById("evening-checkbox");
//add event listeners to checkboxes to show or hide times based on user selection
//morning event listener
checkMorning.addEventListener("change", function () {
     var morningEvents = document.querySelectorAll(".morning");
     if (checkMorning.checked) {
          morningEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          morningEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//afternoon event listener
checkAfternoon.addEventListener("change", function () {
     var afternoonEvents = document.querySelectorAll(".afternoon");
     if (checkAfternoon.checked) {
          afternoonEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          afternoonEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});
//evening event listener
checkEvening.addEventListener("change", function () {
     var eveningEvents = document.querySelectorAll(".evening");
     if (checkEvening.checked) {
          eveningEvents.forEach(function (event) {
               event.style.display = "table-row";
          });
     }
     else {
          eveningEvents.forEach(function (event) {
               event.style.display = "none";
          });
     }
     for (var i = 0; i < tableDays.length; i++) {
          visibleTableRows(tableDays[i]);
     }
});


function resetAllFilters() {
     //reset all checkboxes to checked
     var checkboxes = document.querySelectorAll(".checkbox");
     checkboxes.forEach(function (checkbox) {
          checkbox.checked = true;
          //trigger change event to show all events
          checkbox.dispatchEvent(new Event("change"));
     });
}



//function to expand and collapse dropdowns only when dropdown button is clicked
//function is called in html onclick event for each dropdown button
function expandDropdown(dropdownId) {
     var dropdown = document.getElementById(dropdownId);
     if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
     } else {
          dropdown.style.display = "block";
     }
}


//function to hide day title and table header if no events are displayed
function visibleTableRows(tableId) {
     
     const tableRows = document.querySelectorAll(`#${tableId} tbody tr`);
     let count = 0;
     tableRows.forEach(function (tr) {
          if (tr.style.display !== "none") {
               ++count;
               //alternate row colors for visible rows
               if(count % 2 === 0) {
                    tr.style.backgroundColor = "white";
               } else {
                    tr.style.backgroundColor = "lightgray";
               }
          }


     });
          if (count === 0) {
               document.querySelector(`#${tableId}`).style.display = "none";
          }
          else {document.querySelector(`#${tableId}`).style.display = "table";}
}
