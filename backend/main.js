import express from "express";
import "dotenv/config";
import router from "./routes/characters.js";

const app = express();

app.use(express.json()); //parse the JSON (middleware)
app.use("/characters", router);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})