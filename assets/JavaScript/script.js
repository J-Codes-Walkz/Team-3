/* ===========================
   ORDER TIMETABLE BY CURRENT DAY
   =========================== */

const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday...

const dayElements = {
  monday: document.getElementById("monday"),
  tuesday: document.getElementById("tuesday"),
  wednesday: document.getElementById("wednesday"),
  thursday: document.getElementById("thursday"),
  friday: document.getElementById("friday"),
  saturday: document.getElementById("saturday"),
  sunday: document.getElementById("sunday")
};

const orderMap = {
  0: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
  1: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  2: ["tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday"],
  3: ["wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday"],
  4: ["thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday"],
  5: ["friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday"],
  6: ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"]
};

orderMap[currentDay].forEach((day, index) => {
  dayElements[day].style.order = index;
});

/* ===========================
   FILTER CHECKBOX HANDLING
   =========================== */

const tableDays = [
  "monday-table",
  "tuesday-table",
  "wednesday-table",
  "thursday-table",
  "friday-table",
  "saturday-table",
  "sunday-table"
];

function toggleDisplay(selector, checked) {
  document.querySelectorAll(selector).forEach(el => {
    el.style.display = checked ? "table-row" : "none";
  });
}

function addCheckboxListener(id, selector) {
  const checkbox = document.getElementById(id);
  checkbox.addEventListener("change", () => {
    toggleDisplay(selector, checkbox.checked);
    tableDays.forEach(visibleTableRows);
  });
}

/* Day filters */
addCheckboxListener("monday-checkbox", "#monday");
addCheckboxListener("tuesday-checkbox", "#tuesday");
addCheckboxListener("wednesday-checkbox", "#wednesday");
addCheckboxListener("thursday-checkbox", "#thursday");
addCheckboxListener("friday-checkbox", "#friday");
addCheckboxListener("saturday-checkbox", "#saturday");
addCheckboxListener("sunday-checkbox", "#sunday");

/* Location filters */
addCheckboxListener("birmingham-checkbox", ".birmingham");
addCheckboxListener("london-checkbox", ".london");
addCheckboxListener("manchester-checkbox", ".manchester");

/* Activity filters */
addCheckboxListener("swimming-checkbox", ".swimming");
addCheckboxListener("running-checkbox", ".running");
addCheckboxListener("dancing-checkbox", ".dancing");
addCheckboxListener("yoga-checkbox", ".yoga");

/* Time filters */
addCheckboxListener("morning-checkbox", ".morning");
addCheckboxListener("afternoon-checkbox", ".afternoon");
addCheckboxListener("evening-checkbox", ".evening");

/* ===========================
   RESET FILTERS
   =========================== */

function resetAllFilters() {
  document.querySelectorAll(".checkbox").forEach(cb => {
    cb.checked = true;
    cb.dispatchEvent(new Event("change"));
  });
}

/* ===========================
   DROPDOWN EXPAND/COLLAPSE
   =========================== */

function expandDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

/* ===========================
   TABLE VISIBILITY + ROW STYLING
   =========================== */

function visibleTableRows(tableId) {
  const rows = document.querySelectorAll(`#${tableId} tbody tr`);
  let visibleCount = 0;

  rows.forEach((row, index) => {
    if (row.style.display !== "none") {
      visibleCount++;
      row.style.backgroundColor = index % 2 === 0 ? "lightgray" : "white";
    }
  });

  const table = document.getElementById(tableId);
  table.style.display = visibleCount === 0 ? "none" : "table";
}

/* ===========================
   JOIN MODAL
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("join-btn");
  const joinModal = document.getElementById("join-modal");
  const joinClose = document.getElementById("join-close");

  joinBtn.addEventListener("click", e => {
    e.preventDefault();
    joinModal.style.display = "flex";
  });

  joinClose.addEventListener("click", () => {
    joinModal.style.display = "none";
  });

  joinModal.addEventListener("click", e => {
    if (e.target === joinModal) {
      joinModal.style.display = "none";
    }
  });
});
