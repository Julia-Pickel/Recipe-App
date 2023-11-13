import connect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  // Verbindung mit Datenbank
  await connect();

  if (request.method === "GET") {
    const recipes = await Recipe.find();
    response.status(200).json(recipes);
  }
}
