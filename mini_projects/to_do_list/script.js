const task = document.querySelector('#task');
const tags = document.querySelector('.tags');
const selectStatus = document.querySelector('#status');
const addTask = document.querySelector('.add-task-btn');
let selectedTags = [];

const tagColors = {
  html: '#FF6500',
  css: '#5DD3B6',
  javascript: '#FFD41D',
  react: '#9caf7cff'
};


tags.addEventListener('click', function(e){
  const clickedButton = e.target;
  const tagID = clickedButton.id;
  
  if (selectedTags.includes(tagID)){
    selectedTags = selectedTags.filter(tag => tag !== tagID);
    clickedButton.style.backgroundColor = "";
  } else {
    selectedTags.push(tagID);
    clickedButton.style.backgroundColor = tagColors[tagID];
  }
});

addTask.addEventListener('click', function(e){
  e.preventDefault();

  let taskText = task.value.trim();
  const taskStatus = selectStatus.value;

  let newTask = {
    task: taskText,
    tags: [...selectedTags],
    status: taskStatus
  };

  console.log(newTask);


  const taskBox = `
          <h3>${newTask.task}</h3>
          <div class="tags-deleteBtn">
            <div class="tags-container">${newTask.tags.map(tag => 
              `<span class="tag" style="background-color: ${tagColors[tag]}";>${tag}</span>`
            ).join('')}</div>
            <button id="delete-btn">delete</button>
          </div>
  `;

  const tempDiv = document.createElement('div');
  tempDiv.classList.add('task-box')
  tempDiv.innerHTML = taskBox;
  const deleteButton = tempDiv.querySelector('#delete-btn');

  const todoColumn = document.querySelector('.column.todo');
  const doingColumn = document.querySelector('.column.doing');
  const doneColumn = document.querySelector('.column.done');

  if (newTask.status === "todo"){
    todoColumn.appendChild(tempDiv);
  } else if (newTask.status === "doing"){
    doingColumn.appendChild(tempDiv);
  } else if (newTask.status === "done"){
    doneColumn.appendChild(tempDiv);
  } else {
    alert('invalid status, cant add!');
  }

  deleteButton.addEventListener('click', function(e){
    tempDiv.remove();
  })

  task.value = "";
  selectedTags = [];
  selectStatus.value = "none";  

  document.querySelectorAll('.tags div').forEach(tag => {
    tag.style.backgroundColor = "";
  });

});

/*
innerHTML,textContent,innerText
*/