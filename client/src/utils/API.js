import axios from "axios";

const API = {

  getCarInfo: function (query) {
    return axios.get(`https://marketvalue.vinaudit.com/getmarketvalue.php?key=VA_DEMO_KEY&vin=${query}&format=json`);
  },
  getCars: function () {
    return axios.get("/api/cars");
  },
  deleteCar: function (id) {
    return axios.delete("/api/cars/" + id);
  },
  saveCar: function (carData) {
    return axios.post("/api/cars", carData);
  }
};

export default API;