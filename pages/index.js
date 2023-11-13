import useSWR from "swr";
import {
  StyledCardContainer,
  StyledRecipeCard,
  StyledRecipeImage,
  StyledRecipeLink,
  StyledTitle,
  StyledTitleContainer,
  StyledLemon,
  StyledFavIconLemon,
} from "@/components/RecipeCard/RecipeCard.styled";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/recipes");
  // console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There is an Error. Try again later.</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledTitle>
        Refreshing <StyledLemon>Lemon</StyledLemon>ades <StyledFavIconLemon />
      </StyledTitle>
      {data.map((recipe) => (
        <>
          <StyledCardContainer>
            <StyledRecipeCard key={recipe._id}>
              <StyledRecipeImage
                src={recipe.imageURL}
                alt={recipe.title}
                width={320}
                height={180}
              />

              <StyledTitleContainer>
                <StyledRecipeLink href={`/${recipe._id}`}>
                  {recipe.title} ➞
                </StyledRecipeLink>
              </StyledTitleContainer>
            </StyledRecipeCard>
          </StyledCardContainer>
        </>
      ))}
    </>
  );
}
