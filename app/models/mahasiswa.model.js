module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama_lengkap: String,
      jenis_kelamin: String,
      tanggal_lahir: Date,
      alamat: String,
      umur: Number,
    },
    {
      timestamp: true,
    }
  );

  return mongoose.model("mahasiswa", schema);
};
