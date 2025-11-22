let tasks = {
  task: "",
  tags: [],
  category: "",
};

const task = document.querySelector("#task").addEventListener("input", (e) => {
  e.preventDefault();
  tasks.task = e.target.value;
});

let tagColor = {
  HTML: "#FF6C0C",
  CSS: "#ABE0F0",
  Javascript: "#FFEE91",
  React: "#87BAC3",
};

let tagSelected = "";

const tags = document.querySelector(".tags").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    tagSelected = e.target;

    if (tagSelected.style.backgroundColor) {
      tagSelected.style.backgroundColor = "";
      tasks.tags = tasks.tags.filter(t => t != e.target.innerText);
    } else {
      if (tagColor.hasOwnProperty(e.target.innerText)) {
        tagSelected.style.backgroundColor = tagColor[e.target.innerText];
        tasks.tags = [...tasks.tags, e.target.innerText];
      }
    }
    console.log(tasks);
  },
  true
);

const category = document
  .querySelector(".task_category")
  .addEventListener("change", (e) => {
    console.log(e.target.value);
    tasks.category = e.target.value;
  });

const addTaskButton = document
  .querySelector("#add_task_button")
  .addEventListener("click", (e) => {
    if (tasks.task === "" || tasks.tags.length === 0 || tasks.category === "") {
      alert("Please fill in all required fields!");
    } else {
      console.log("Current category:", tasks.category);
      console.log("Current task:", tasks.task);
      console.log("Current tags:", tasks.tags);
      console.log(tasks);
      const todoSection = document.querySelector(".todo");
      const doingSection = document.querySelector(".doing");
      const doneSection = document.querySelector(".done");

      if (tasks.category === "to_do") {
        taskBox_to_do(todoSection);

        tasks.task = "";
        tasks.tags = [];
        tasks.category = "";
      } else if (tasks.category === "doing") {
        taskBox_doing(doingSection);

        tasks.task = "";
        tasks.tags = [];
        tasks.category = "";
      } else {
        taskBox_done(doneSection);

        tasks.task = "";
        tasks.tags = [];
        tasks.category = "";
      }
    }
  });

function taskBox_to_do(todoSection) {
  const taskBox = document.createElement("div");
  taskBox.classList.add("taskCard");
  const p = document.createElement("p");
  p.innerHTML = tasks.task;

  taskBox.appendChild(p);

  tasks.tags.forEach((tag) => {
    const tagg = document.createElement("span");
    tagg.classList.add("task_box_tags");
    tagg.innerHTML = tag;
    taskBox.appendChild(tagg);
  });

  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = "Delete";

  taskBox.appendChild(deleteTask);

  todoSection.appendChild(taskBox);

  deleteTask.addEventListener("click", (e) => {
    taskBox.remove();
  });
}

function taskBox_doing(doingSection) {
  const taskBox = document.createElement("div");
  taskBox.classList.add("taskCard");
  const p = document.createElement("p");
  p.innerHTML = tasks.task;

  taskBox.appendChild(p);

  tasks.tags.forEach((tag) => {
    const tagg = document.createElement("span");
    tagg.classList.add("task_box_tags");
    tagg.innerHTML = tag;
    taskBox.appendChild(tagg);
  });

  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = "Delete";

  taskBox.appendChild(deleteTask);

  doingSection.appendChild(taskBox);

  deleteTask.addEventListener("click", (e) => {
    taskBox.remove();
  });
}

function taskBox_done(doneSection) {
  const taskBox = document.createElement("div");
  taskBox.classList.add("taskCard");
  const p = document.createElement("p");
  p.innerHTML = tasks.task;

  taskBox.appendChild(p);

  tasks.tags.forEach((tag) => {
    const tagg = document.createElement("span");
    tagg.classList.add("task_box_tags");
    tagg.innerHTML = tag;
    taskBox.appendChild(tagg);
  });

  const deleteTask = document.createElement("button");
  deleteTask.innerHTML = "Delete";

  taskBox.appendChild(deleteTask);

  doneSection.appendChild(taskBox);

  deleteTask.addEventListener("click", (e) => {
    taskBox.remove();
  });
}
