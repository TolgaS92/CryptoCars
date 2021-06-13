import axios from "axios";

const API = {

  getCrypto: function () {
    return axios.get("http://api.coinlayer.com/api/live?access_key=31f0082c5c3f7e1c73fa3fc74d8efad2&symbols=BTC,ETH,DOGE")
  },
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