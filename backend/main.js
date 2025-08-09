import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/characters.js";

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    process.env.FRONTEND_URL
  ],
  credentials: true
}));

app.use(express.json()); //parse the JSON (middleware)
app.use("/characters", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// For Vercel serverless deployment
export default app;