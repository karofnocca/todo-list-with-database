import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../../firebaseConfig.js";

export async function signWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    if (result._tokenResponse.isNewUser) {
      console.log("ПРоизошла регистрация через гугл");
    } else {
      console.log("Вход через гугл прошел успешно");
    }
  } catch (error) {
    console.error("Ошибка входа через Google", error.message);
  }
}
