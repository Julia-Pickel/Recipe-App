import Image from "next/image";
import { useRouter } from "next/router";

export default function RecipeDetails({
  image,
  title,
  ingredients,
  description,
}) {
  const router = useRouter();

  return (
    <>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={200} />
      <p>
        <strong>Ingredients: </strong>
        {ingredients}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <button type="button" onClick={() => router.push("/")}>
        ← Back
      </button>
    </>
  );
}
