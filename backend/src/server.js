import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import {connectDb} from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDb();
//middleware
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log("server started on PORT: 5001",PORT);
});

