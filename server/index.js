import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import templates from "./models/templates.js";
import { google } from "googleapis";
import process from "process";
import { authenticate } from "@google-cloud/local-auth";
import { ref, getDownloadURL, listAll, list } from "firebase/storage";
import storage from "./firebase.js";
import { async } from "@firebase/util";
import templatesRoute from "./Routes/templatesRoute.js";

const app = express();

app.use(bodyParser.json({ limit: "300mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

app.use("/getTemplates", templatesRoute);

const CONNECT_URL =
  "mongodb+srv://HasnainAli:0310React@cluster0.dpng040.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 4567;
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECT_URL, { useNewUrlParser: true, dbName: "CV-maker" })
  .then(app.listen(PORT, () => console.log(`server running at PORT:${PORT}`)))
  .catch((error) => {
    console.log(error);
  });
