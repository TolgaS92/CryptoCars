import axios from "axios";

const Userapi = {
    getUser: function(id) {
      console.log(id)
      return axios.get("/api/user/" + id);
     },
    saveUser: function(userData) {
      console.log(userData);
      return axios.post("/api/users", userData);
    }
  };
  
  export default Userapi;
