import mongoose from "mongoose";

const templatesSchema = mongoose.Schema({
  doc: String,
  image: String,
  name: String,
});

const templates = mongoose.model("templates", templatesSchema);
export default templates;
