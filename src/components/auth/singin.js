import { auth, signInWithEmailAndPassword } from "../../firebaseConfig.js";
import { loadData } from "../ui/loadData.js";

const singinForm = document.getElementById("singin-form");
const taskContainer = document.getElementById("task-container");

singinForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("singin-email").value;
  const password = document.getElementById("singin-password").value;

  try {
    const userCredental = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredental.user;
    console.log("Пользователь авторизован", user.uid);

    alert("Авторизация прошла успешно");
    hideSingupForm();
    showTasksBlock();
    loadData();
  } catch (error) {
    console.error("Ошибка авторизации", error.message, error.code);
    alert(`Ошибка авторизации ${error}`);
  }
});

function showTasksBlock() {
  taskContainer.style.display = "block";
}

function hideSingupForm() {
  singinForm.style.display = "none";
}
