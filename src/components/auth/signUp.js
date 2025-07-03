import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebaseConfig.js";
import {
  showError,
  showSuccess,
  showWarning,
} from "../../utils/notification.js";

const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const signInButton = document.getElementById("signIn");
import { signWithGoogle } from "./googleAuth.js";

const googleButton = document.getElementById("google-signup-button");
googleButton.addEventListener("click", signWithGoogle);

signInButton.addEventListener("click", (event) => {
  event.preventDefault();
  hideSignupForm();
  showSigninForm();
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;

  const password = document.getElementById("signup-password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    await sendEmailVerification(user);

    showSuccess(
      "Для входа необходимо верифицировать email. Проверьте свою почту"
    );
    signupForm.reset();
    hideSignupForm();
    showSigninForm();
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showWarning(
        "Этот email уже зарегистрирован, пожалуйста, войдите в систему"
      );
    }
    console.error("Ошибка регистрации: ", error.message, error.code);
    showError(`Ошибка регистрации`);
  }
});

export function hideSignupForm() {
  signupForm.style.display = "none";
}

export function showSigninForm() {
  signinForm.style.display = "block";
}
