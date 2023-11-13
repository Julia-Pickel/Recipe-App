export default function RecipeDetail() {
  const { data, error, isLoading } = useSWR("api/recipes");
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There is an Error. Try again later.</h1>;
  }

  if (data) {
    //console.log(artPiecesInfo);
  }

  return (
    <>
      <h1>
        <span role="img" aria-label="A chef">
          🥤
        </span>
        Refreshing Lemonades
      </h1>
      {data.map((recipe) => (
        <>
          <ul>
            <li key={recipe._id}>{recipe.title}</li>
            <image key={recipe._id}>{recipe.image}</image>
            <li key={recipe._id}>
              <strong>Ingredients: </strong>
              {recipe.ingredients}
            </li>
            <li key={recipe._id}>
              <strong>Description: </strong>
              {recipe.description}
            </li>
          </ul>
        </>
      ))}
    </>
  );
}
