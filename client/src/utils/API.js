import axios from "axios";

const API_KEY =
  "rOqZ40BALDTYj0--V9eVOtKW6u-Apb51CP-HdsARpfAvVC_ajs6DHng_LigAuhjZQOEW3EH4AatCtkTBiCt8IomSAlHIIHexk65DlcW9gMXLz-hoAX1IA3tXeTK8X3Yx";

export default {
  logIn: function (email, password) {
    return axios.post("/api/auth/login", { email, password });
  },
  signUp: function (email, password) {
    return axios.post("/api/account/signup", { email, password });
  },
  verifyAuthentication: function () {
    return axios.get("/api/auth/login", {
      headers: {
        Authorization: localStorage.getItem("authorization-token"),
      },
    });
  },
  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  getRestaurants: function () {
    return axios.create({
      baseURL: "https://api.yelp.com/v3/",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-type": "application/json",
      },
    });
  },
};
