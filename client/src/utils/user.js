import axios from "axios";

const Userapi = {
    // getUser: function(id) {
    //   return axios.get("/api/user/" + id);
    // },
    saveUser: function(userData) {
      console.log(userData);
      return axios.post("/", userData);
    }
  };
  
  export default Userapi;
