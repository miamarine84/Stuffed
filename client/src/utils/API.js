import axios from "axios";

const API_KEY =
  "rOqZ40BALDTYj0--V9eVOtKW6u-Apb51CP-HdsARpfAvVC_ajs6DHng_LigAuhjZQOEW3EH4AatCtkTBiCt8IomSAlHIIHexk65DlcW9gMXLz-hoAX1IA3tXeTK8X3Yx";

export default {
  logIn:function(username,password) {
    return axios.post("/api/auth/login",{username,password});
  },
  signUp:function(username,password) {
    return axios.post("/api/account/signup",{"username": username, "password": password});
  },
  verifyAuthentication:function() {
    return axios.get("/api/auth/login",{
      headers: {
        Authorization:localStorage.getItem("authorization-token")
      }
    })
  },
  searchUser:function(username){
    return axios.get(`api/users/search?username=${username}`);
  },
  liked:function(likedId, currentUser){
    console.log(likedId, currentUser)
    return axios.put(`api/liked/sendLike?likedId=${likedId}&currentUser=${currentUser}`);
  }
};
