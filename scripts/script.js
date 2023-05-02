"use strict";

const projectNameEl = document.getElementById("inputProjectName");
const projectLangsEL = document.getElementById("inputLang");
const formEL = document.getElementById("form");
const listEl = document.getElementById("list");

//global variable
// let listItems = localStorage.getItem("ListItems");
// listItems = listItems ? JSON.parse(listItems) : [];
let startIndexValue = 0;

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
  // data.forEach((item) => {
  //   items.push(item);
  // });
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
      <div class="draggableBox" draggable="true">
        <h1 class="projectName">${item.name}</h1>
        <p class="projectLangs">⦾${item.language}</p>
      </div>`;
    liEl.setAttribute("dataIndex", index);
    listEl.appendChild(liEl);
  });
  console.log(data);
  console.log(Array.isArray(data));
  console.log(Array.isArray(listEl));

  dragAndDrop();
};

function dragStart() {
  startIndexValue = +this.closest("li").getAttribute("dataIndex");
}

function dragDrop() {
  const lastIndexValue = +this.getAttribute("dataIndex");
  swapItem(startIndexValue, lastIndexValue);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

const dragAndDrop = () => {
  const listItems = document.querySelectorAll(".draggableBox");
  const draggableItems = document.querySelectorAll(".list li");

  listItems.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
  });

  draggableItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
};

function swapItem(fromIndex, toIndex) {
  console.log(listEl[fromIndex]);
  console.log(listEl[toIndex]);
  console.log(Array.isArray(listEl));
  console.log(Array.isArray(items));
}
//
init();
