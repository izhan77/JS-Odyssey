// const start_button = document.querySelector('#start_btn');
// const welcome_page = document.querySelector('#welcome_page');
// const questions_page = document.querySelector('#questions_page');

// start_button.addEventListener('click', function(e){
//     welcome_page.classList.toggle('hidden');
//     questions_page.classList.add('active');
// });

const q1_correctOption = document.querySelector("#option2");

const options = document.querySelectorAll(".option");

const check_btn = document.querySelector("#check");
console.log(check_btn)
const next_btn = document.querySelector("#next");
console.log(next_btn)

let timeLeft = document.querySelector(".time").textContent.slice(0, 2);
let timeInterval;
let time = document.querySelector(".time");
const maxBarWidth = 53;
const totalTime = 15;

const bar = document.querySelector(".bar");

timeInterval = setInterval(() => {
  timeLeft--;
  updateProgressBar(timeLeft);
  updateTimerDisplay(timeLeft);
  let img = q1_correctOption.children[2];

  if (timeLeft <= 6) {
    time.style.color = "red";
    if (timeLeft === 0) {
      correctState(q1_correctOption, img);
      clearInterval(timeInterval);
    }
  } else {
    time.style.color = "black";
  }
}, 1000);

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    resetSelectedState(options);
    option.classList.add("selected");
    const userOption = option.children[1].textContent;
    let img = option.children[2];

    check_btn.addEventListener("click", function (e) {
      check_btn.style.display = "none";
      next_btn.style.display = "flex";
      clearInterval(timeInterval);
      if (
        userOption === q1_correctOption.children[1].textContent ||
        timeLeft <= 0
      ) {
        correctState(q1_correctOption, img);
        disablePointerEvents(options);
      } else {
        incorrectState(option, img);
        disablePointerEvents(options);
      }
    });
  });
});

function updateProgressBar(currentTime) {
  const currentWidth = (currentTime / totalTime) * maxBarWidth;
  bar.style.width = `${currentWidth}em`;
}

function correctState(option, img) {
  option.classList.remove("selected");
  option.classList.add("correct");
  img.innerHTML = '<img src="assets/checked.png" alt="correct">';
}

function incorrectState(option, img) {
  option.classList.remove("selected");
  option.classList.add("wrong");
  img.innerHTML = '<img src="assets/remove.png" alt="wrong">';
}

function disablePointerEvents(options) {
  options.forEach((option) => {
    option.style.pointerEvents = "none";
  });
}

function enablePointerEvents(options) {
  options.forEach((option) => {
    option.style.pointerEvents = "auto";
  });
}

function resetSelectedState(options) {
  options.forEach((option) => {
    if (option.classList.contains("selected")) {
      option.classList.remove("selected");
    }
  });
}

function updateTimerDisplay(timeLeft) {
  document.querySelector(".time").textContent = `${timeLeft}:00`;
}
