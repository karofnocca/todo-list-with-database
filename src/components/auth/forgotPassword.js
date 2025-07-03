import { sendPasswordResetEmail, auth } from "../../firebaseConfig.js";

const forgotPasswordForm = document.getElementById("forgot-password-form");
const forgotPasswordMessage = document.getElementById(
  "forgot-password-message"
);

forgotPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("forgot-password-email").value;

  try {
    await sendPasswordResetEmail(auth, email);
    forgotPasswordMessage.textContent =
      "Письмо для сброса пароля успешно отправлено на ваш email";
    forgotPasswordMessage.style.color = "green";
    forgotPasswordMessage.style.margin = "10px";
    forgotPasswordForm.style.display = "none";
  } catch (error) {
    console.error("Ошибка при отправке письма");
    forgotPasswordMessage.textContent = `Ошибка: ${error.message}`;
    forgotPasswordMessage.style.color = "red";
    forgotPasswordMessage.style.margin = "10px";
  }
});
