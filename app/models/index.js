const dbConfig = require("../config/database");
const mongoose = require("mongoose"); //untuk berinteraksi dengan database MongoDB, fungsinya agar kita dapat menggunakan fitur-fitur yang disediakan oleh Mongoose, seperti membuat model, melakukan kueri, dan lain-lain untuk berinteraksi dengan basis data MongoDB

/* kode ini menghasilkan sebuah objek yang akan diekspor dari file tersebut.
Objek ini berisi referensi ke modul mongoose, properti url dari objek dbConfig,
dan model mahasiswa yang diimpor dari file mahasiswa.model.js.*/
module.exports = {
  mongoose,
  url: dbConfig.url,
  mahasiswa: require("./mahasiswa.model.js")(mongoose),
};
