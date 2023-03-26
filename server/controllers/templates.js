import mongoose from "mongoose";
import templates from "../models/templates.js";

export const getTemplate = async (req, res) => {
  try {
    console.log("in server");
    const allTemplates = await templates.find();
    console.log(allTemplates);
    res.status(200).send(allTemplates);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
