import { auth, signInWithEmailAndPassword } from "../../firebaseConfig.js";

const singinForm = document.getElementById("singin-form");

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
  } catch (error) {
    console.error("Ошибка авторизации", error.message, error.code);
    alert(`Ошибка авторизации ${error}`);
  }
});
