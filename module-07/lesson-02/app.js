const addBtn = document.querySelector(".header-form");
const ulEl = document.querySelector(".tasks-list");
const themeTog = document.querySelector("#themeToggle");
const store = {
  tasks: [
    {
      id: 0,
      taskNm: "task1",
      taskDescr: "finish task 1",
    },
    {
      id: 1,
      taskNm: "task2",
      taskDescr: "finish task 2",
    },
  ],
};

init();

addBtn.addEventListener("submit", onFormSubmit);
ulEl.addEventListener("click", onTaskClck);
themeTog.addEventListener("click", onTogleTheme);

function onFormSubmit(event) {
  event.preventDefault();
  const taskNm = event.target.elements.taskName.value.trim();
  const taskDescr = event.target.elements.taskDescription.value.trim();
  if (!taskNm || !taskDescr) {
    return alert("All fields must be filled, niggaaaaaa!!!");
  }
  const task = { id: Date.now(), taskNm, taskDescr };
  //   tasks.push(task);
  store.tasks = [...store.tasks, task];
  ulEl.insertAdjacentHTML("beforeend", createTaskMarkup(task));
  event.target.reset();
}

function onTaskClck(event) {
  const currEl = event.target;
  if (currEl.nodeName !== "BUTTON") {
    return;
  }
  const taskId = +currEl.dataset.id;

  const filteredId = store.tasks.filter(task => taskId !== task.id);
  ulEl.innerHTML = filteredId.map(createTaskMarkup).join("");
  store.tasks = filteredId;
  console.log(store.tasks);
}

function onTogleTheme(event) {
  const bodyEl = event.target.closest("body");
  const isLightTheme = bodyEl.classList.contains("theme-light");
  if (isLightTheme) {
    bodyEl.classList.replace("theme-light", "theme-dark");
    return;
  }
  bodyEl.classList.replace("theme-dark", "theme-light");
}

function createTaskMarkup(task) {
  return `
        <li class="task-list-item">
            <button class="task-list-item-btn" data-id="${task.id}">Delete</button>
            <h3>${task.taskNm}</h3>
            <p>${task.taskDescr}</p>
        </li>
    `;
}

function init() {
  if (store.tasks.length === 0) {
    return;
  }
  ulEl.innerHTML = store.tasks.map(createTaskMarkup).join("");
}
