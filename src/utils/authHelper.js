import { auth, onAuthStateChanged } from "../firebaseConfig.js";

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();

          resolve({ uid: user.uid, token });
        } catch (error) {
          reject(new Error("Не удалось получить токен"));
        }
      } else {
        reject(new Error("Пользователь не авторизован"));
      }
    });
  });
};
