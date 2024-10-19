import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/Mobil.js";
import mahasiswaRoute from "./routes/Mahasiswa.js";

const app = express();
const PORT = 8000;

app.use("/mobil", mobilRoute);
app.use("/mahasiswa", mahasiswaRoute);


app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("Selamat Pagi");
});

app.use(bodyParser.json());
app.listen(PORT, () =>
    console.log(`sServer berjalan di port : http://localhost:${PORT}`));
