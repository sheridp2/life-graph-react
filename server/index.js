import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import entryRoutes from "./routes/entry.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/entry", entryRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, welcome to LifeGraph backend");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));
