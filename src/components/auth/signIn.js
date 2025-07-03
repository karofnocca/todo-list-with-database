import {
  auth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "../../firebaseConfig.js";
import {
  showConfirmation,
  showSuccess,
  showWarning,
} from "../../utils/notification.js";
import { loadData } from "../index.js";
import { signWithGoogle } from "../index.js";

const signinForm = document.getElementById("signin-form");
const taskContainer = document.getElementById("task-container");

const googleButton = document.getElementById("google-signin-button");
googleButton.addEventListener("click", signWithGoogle);

const forgotPasswordForm = document.getElementById("forgot-password-form");
const forgotPasswordButton = document.getElementById("forgot-password-button");
forgotPasswordButton.addEventListener("click", showForgotPasswordForm);

signinForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (!user.emailVerified) {
      showWarning(
        "Ваш email не верифицирован, пожалуйста, проверьте вашу почту!"
      );
      const resend = showConfirmation(
        "Отправить письмо для верификации повторно?"
      );
      if (resend) {
        await sendEmailVerification(user);
        showSuccess("Письмо для верификации отправлено повторно");
      }
      return;
    }

    hideSigninForm();
    showTasksBlock();
    loadData();
  } catch (error) {
    console.error("Ошибка авторизации: ", error.message, error.code);
    alert(`Ошибка авторизации: ${error.message}`);
  }
});

export function showTasksBlock() {
  taskContainer.style.display = "block";
}

export function hideSigninForm() {
  signinForm.style.display = "none";
}

function showForgotPasswordForm() {
  forgotPasswordForm.style.display = "flex";
  hideSigninForm();
}
