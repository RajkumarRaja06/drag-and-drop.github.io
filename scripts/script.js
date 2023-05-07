"use strict";

const projectNameEl = document.getElementById("inputProjectName");
const projectLangsEL = document.getElementById("inputLang");
const formEL = document.getElementById("form");
const listEl = document.getElementById("list");
const ulOutput = document.querySelectorAll(".output");

let dragItem = null;

const items = [];

const data = [
  {
    id: 0.5555,
    name: "Drag And Drop",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Count Town Timer",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Balance Amount Checker",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Registration Form",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Drag And Drop",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Rock Paper Scissors",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Seat Booking",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Pig Game Main",
    language: "HTML, CSS, JavaScript",
  },

  {
    id: 0.5555,
    name: "Currency Convertor",
    language: "HTML, CSS, JavaScript",
  },
  {
    id: 0.5555,
    name: "Expense Tracker",
    language: "HTML, CSS, JavaScript",
  },
];

const init = () => {
  listEl.innerHTML = null;
  createList();
};

//addEventListener
formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectTitle = projectNameEl.value.trim();
  const projectLang = projectLangsEL.value.trim();

  //align th input
  const name = projectTitle.toUpperCase();
  const language = projectLang
    .replaceAll(" ", "")
    .replaceAll(",", " ⦾")
    .toUpperCase();
  const item = { id: Math.random(), name, language };
  if (projectTitle && projectLang) {
    data.push(item);
    init();
  } else alert("Input Field Is Mandatory");

  projectNameEl.value = null;
  projectLangsEL.value = null;
});

const createList = () => {
  data.forEach((item, index) => {
    const liEl = document.createElement("li");
    liEl.innerHTML = `
      <span class="itemNum">${index + 1}</span>
      <div class="draggableBox">
        <h1 class="projectName">${item.name}</h1>
        <p class="projectLangs">⦾${item.language}</p>
      </div>`;
    liEl.setAttribute("draggable", true);
    liEl.setAttribute("dataIndex", index);
    listEl.appendChild(liEl);
  });
  dragAndDrop();
};

const dragAndDrop = () => {
  const listItems = document.querySelectorAll(".list li");

  listItems.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });
  ulOutput.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", dragDrop);
  });
};

function dragStart(e) {
  dragItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  setTimeout(() => (this.style.display = "flex"), 0);
  dragItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  console.log(this);
  this.appendChild(dragItem);
}

//initial setting
init();
