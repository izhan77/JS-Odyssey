let taskInput = document.querySelector("#task");
let tags = document.querySelector(".tags");
let status = document.querySelector("#status");
let submitBtn = document.querySelector("#submit-btn");
let todoSection = document.querySelector(".todo");
let doingSection = document.querySelector(".doing");
let doneSection = document.querySelector(".done");
let storedTasks = localStorage.getItem("tasks");
let currentStatus;
let tagsArr = [];
let allTasks = [];
let allTags = document.querySelectorAll(".tags button");
let tagColors = {
  HTML: "#FF653F",
  CSS: "#84C5B1",
  Javascript: "#FFC85C",
  React: "#AAFFC7",
};

tags.addEventListener("click", function (e) {
  let tagName = e.target.innerText;

  if (!tagsArr.includes(tagName)) {
    tagsArr.push(tagName);
    e.target.style.backgroundColor = tagColors[tagName];
  } else {
    tagsArr = tagsArr.filter((t) => t !== tagName);
    e.target.style.backgroundColor = "#F0F0F0";
  }
});

status.addEventListener("change", function (e) {
  currentStatus = e.target.value;
});

submitBtn.addEventListener("click", function (e) {
  if (taskInput.value.trim(" ") === "") {
    alert("Please enter task first!");
  } else {
    let taskObject = {
      task: taskInput.value,
      tags: [...tagsArr],
      status: currentStatus,
    };

    allTasks.push(taskObject);
    localStorage.setItem("tasks", JSON.stringify(allTasks));

    displayTasks();

    taskInput.value = "";
    allTags.forEach((button) => {
      button.style.backgroundColor = "#F0F0F0";
    });
    tagsArr = [];
  }
});

function displayTasks() {
  todoSection.innerHTML = "";
  doingSection.innerHTML = "";
  doneSection.innerHTML = "";

  allTasks.forEach((taskObject) => {
    const taskBox = `<div class="task-box">
                        <h3>${taskObject.task}</h3>
                        <div class="task-box-tags">
                            ${taskObject.tags.map((t) => `<span style="background-color: ${tagColors[t]};" >${t}</span>`).join(" ")}
                            <button type="button" class="delete-btn">Delete</button>
                        </div>
                     </div>`;

    if (taskObject.status === "todo") {
      todoSection.innerHTML += taskBox;
    } else if (taskObject.status === "doing") {
      doingSection.innerHTML += taskBox;
    } else {
      doneSection.innerHTML += taskBox;
    }
  });
}

function handleDelete(e) {
  if (e.target.classList.contains("delete-btn")) {
    let taskBox = e.target.closest(".task-box");
    let taskName = taskBox.querySelector("h3").innerText;
    allTasks = allTasks.filter((t) => t.task !== taskName);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    displayTasks();
  }
}

todoSection.addEventListener("click", handleDelete);
doingSection.addEventListener("click", handleDelete);
doneSection.addEventListener("click", handleDelete);

if (storedTasks) {
  allTasks = JSON.parse(storedTasks);
}

displayTasks();
