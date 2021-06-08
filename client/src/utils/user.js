import axios from "axios";

const Userapi = {
    // getUser: function(id) {
    //   return axios.get("/api/user/" + id);
    // },
    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    }
  };
  
  export default Userapi;
