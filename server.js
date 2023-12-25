import express from "express";
const app = express();
const port = process.env.PORT;
const PORT = port || 5000;
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import tedious, { Request, TYPES } from "tedious";
app.use(cors());
//middleware
import notFoundMiddleware from "./middleware/notfoundMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

//db
import connectDB from "./db/connect.js";

//router
import authRoute from "./routes/authRoute.js";
import jobsRoute from "./routes/jobRoutes.js";

app.use(express.json());

import sql from "msnodesqlv8";

const connstring =
  "Driver={ODBC Driver 18 for SQL Server};Server=tcp:appserver20233.database.windows.net,1433;Database=ajdb2023;Uid=sqlusr;Pwd=Ks@zure13101;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;";
const query = "SELECT * FROM Products";

app.get("/api/v1", (req, res) => {
  sql.query(connstring, query, (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
