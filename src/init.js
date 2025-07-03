import { initDeleteCompleted, initAddTodo } from "./components/index.js";
import { auth, onAuthStateChanged } from "./firebaseConfig.js";
import { loadData } from "./components/index.js";
import { showTasksBlock } from "./components/index.js";
import { hideSigninForm } from "./components/index.js";
import { hideSignupForm } from "./components/index.js";
import { showWarning } from "./utils/notification.js";

export function initApp() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!user.emailVerified) {
        showWarning(
          "Ваш email не верифицирован, пожалуйста, проверьте вашу почту"
        );
        return;
      }
      loadData();
      hideSigninForm();
      hideSignupForm();
      showTasksBlock();
    } else {
      console.log("Пользователь не авторизован");
      document.getElementById("signup-form").style.display = "block";
    }
  });
  initAddTodo();
  initDeleteCompleted();
}
