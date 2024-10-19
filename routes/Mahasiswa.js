import express, {Router} from "express";
const router = express.Router();
const mahasiswa = [
    {
        nama : "Budi Mujaer",
        nim : "2022014495",
        alamat : "Depan Indomaret",
        angkatan : 2012,
    },
    {
        nama : "Roni Tambal Ban",
        nim : "2012434132",
        alamat : "Sebelah Rumah Pak Jodi",
        angkatan : 2022,
    },
];
router.get("/", (req, res) => {
    res.send(mahasiswa);
});
export default router;