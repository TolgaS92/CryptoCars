import axios from "axios";

const API = axios.create({ baseURL: 'https://cryptocarsmern.herokuapp.com' });

/* http://localhost:3000 */
/* https://cryptocarsmern.herokuapp.com */

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  getCrypto: function () {
    return axios.get("http://api.coinlayer.com/api/live?access_key=31f0082c5c3f7e1c73fa3fc74d8efad2&symbols=BTC,ETH,DOGE")
  },
  getCarInfo: function (query) {
    return axios.get(`https://marketvalue.vinaudit.com/getmarketvalue.php?key=VA_DEMO_KEY&vin=${query}&format=json`);
  },
  getCars: function () {
    return API.get("/api/cars/");
  },
  deleteCar: function (id) {
    return API.delete("/api/cars/" + id);
  },
  saveCar: function (carData) {
    return API.post("/api/cars", carData);
  },
  signIn: function (formData) {
    return API.post('/api/users/signin', formData);
  },
  signUp: function (formData) {
    return API.post('/api/users/signup', formData);
}
};
