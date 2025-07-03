import {
  initDeleteCompleted,
  initAddTodo,

} from "./components/index.js";

initAddTodo();
initDeleteCompleted();
initDownload();

const singupForm = document.getElementById("singup-form");
const singinForm = document.getElementById("singin-form");
const taskContainer = document.getElementById("task-container");

singupForm.style.display = "display";
singinForm.style.display = "none";
taskContainer.style.display = "none";
