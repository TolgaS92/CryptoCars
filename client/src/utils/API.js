import axios from "axios";

export default  {

  // Gets the books from Google
  getCarInfo: function (query) {
    return axios.get(`https://marketvalue.vinaudit.com/getmarketvalue.php?key=VA_DEMO_KEY&vin=${query}&format=json`);
  },
  // Gets all books
  getCars: function () {
    return axios.get("/api/cars");
  },
  // Deletes the book with the given id
  deleteCar: function (id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves a book to the database
  saveCar: function (carData) {
    console.log("I am in saved");
    return axios.post("/api/cars", carData);
  }
};
