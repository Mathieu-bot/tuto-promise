import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/characters.js";

const app = express();

// Enable CORS for frontend communication
app.use(cors({
  origin: [
    'http://localhost:5173', // Vite default port (development)
    'https://your-frontend-domain.vercel.app', // Production URL (à remplacer)
    'https://your-frontend-domain.netlify.app' // Ou Netlify URL (à remplacer)
  ],
  credentials: true
}));

app.use(express.json()); //parse the JSON (middleware)
app.use("/characters", router);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})