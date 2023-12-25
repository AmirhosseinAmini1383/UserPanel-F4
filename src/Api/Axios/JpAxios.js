import axios from "axios";
export const jpAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  //   به عنوان مثال بودش
  //   headers: {
  //     Authorization: "Bearer 5fdsd14sdf11e65fsef2evad45eefr46rgh14jy...",
  //     "Content-Type": "application/json",
  //   },
  // timeout: 5000,
  // timeoutErrorMessage: "زمان پاسخگویی شما 5 ثانیه زمان برد...!",
});
