import express from "express";
import cors from "cors"
import noteRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimit.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173"
}))
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server started on PORT : ${PORT}`);
  });
});


