import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig.js";

const singupForm = document.getElementById("singup-form");

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
  } catch (error) {
    console.error("Ошибка регистрации", error.message, error.code);
    alert(`Ошибка регистрации ${error}`);
  }
});
