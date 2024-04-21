const express = require("express"); // express adalah kerangka kerja web untuk Node.js yang memungkinkan kita untuk dengan mudah membuat aplikasi web dan menangani rute HTTP.
const cors = require("cors"); // cors adalah middleware untuk Express.js yang membantu dalam menangani masalah kebijakan lintasan lintas-situs (CORS). Ini memungkinkan aplikasi untuk menerima permintaan dari domain yang berbeda.
const db = require("./app/models/index");

const app = express();

//meregister midleware cors
const corsOption = {
  origin: "*", //Artinya, server akan memberikan izin kepada permintaan yang datang dari domain mana pun
};

// register cors middleware, ini adalah metode Express yang digunakan untuk menerapkan middleware pada aplikasi Express
app.use(cors(corsOption)); //menggunakan middleware CORS untuk menangani permintaan HTTP, dengan konfigurasi yang ditentukan dalam objek corsOption. Ini memungkinkan permintaan dari domain mana pun untuk diizinkan oleh server.
app.use(express.json()); //untuk menguraikan body dari permintaan HTTP yang dikirimkan sebagai JSON. Hal ini memungkinkan kita untuk dengan mudah mengakses data JSON yang dikirimkan dalam permintaan di dalam penanganan rute kita

// koneksi ke database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`failed to connect database ${err.message}`);
    process.exit();
  });

// membuat routes
app.get("/", (req, res) => {
  res.json({ message: "Hello Resandy" });
});

// memanggil routes mahasiswa
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
