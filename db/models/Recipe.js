import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
});

const Recipe = models?.Recipe || model("Recipe", recipeSchema);
export default Recipe;
