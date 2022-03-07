import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/db.js";

import role from "./routes/role.js";
import user from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors);

app.use("/api/role", role);
app.use("/api/user", user);

app.listen(process.env.PORT, () =>
  console.log("listening on port " + process.env.PORT)
);

db.dbConnection();
