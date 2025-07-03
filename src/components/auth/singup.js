import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig.js";

const singupForm = document.getElementById("singup-form");
const singinForm = document.getElementById("singin-form");
const singin = document.getElementById("singin");

singin.addEventListener("click", (e) => {
  e.preventDefault();
  hideSingupForm();
  showSinginForm();
});

singupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("singup-email").value;
  const password = document.getElementById("singup-password").value;

  try {
    const userCredental = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredental.user;
    console.log("Пользователь зареган", user.uid);

    alert("Регистрация прошла успешно");
    singupForm.reset;
    hideSingupForm();
    showSinginForm();
  } catch (error) {
    console.error("Ошибка регистрации", error.message, error.code);
    alert(`Ошибка регистрации ${error}`);
  }
});

function hideSingupForm() {
  singupForm.style.display = "none";
}

function showSinginForm() {
  singinForm.style.display = "block";
}
