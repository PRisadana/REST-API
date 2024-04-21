const db = require("../models");
const mahasiswa = db.mahasiswa;

// menambahkan data pada mahasiswa
exports.create = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);

  mahasiswa
    .create(req.body)
    .then(() => res.send({ message: "Data saved" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

// menampilkan semua data pada mahasiswa
exports.findAll = (req, res) => {
  mahasiswa
    .find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  mahasiswa
    .findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir); //untuk mengecek apakah nilai date valid sebelum masuk ke database

  mahasiswa
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Can't Update Data" });
      }
      res.send({ message: "Data Updated" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  mahasiswa
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Can't Delete Data" });
      }
      res.send({ message: "Data Deleted" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
