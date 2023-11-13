import useSWR from "swr";
import { useRouter } from "next/router";
import {
  StyledCardContainer,
  StyledRecipeCard,
  StyledRecipeImage,
  StyledTitle,
  StyledTitleContainer,
  StyledFavIconLemon,
  StyledLemon,
} from "@/components/RecipeCard/RecipeCard.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/recipes/${id}`);
  // JSON.stringify(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There is an Error. Try again later.</h1>;
  }

  if (data) {
  }

  return (
    <>
      <StyledTitle>
        Refreshing <StyledLemon>Lemon</StyledLemon>ades <StyledFavIconLemon />
      </StyledTitle>
      <StyledCardContainer>
        <StyledRecipeCard key={data._id}>
          <StyledRecipeImage
            src={data.imageURL}
            alt={data.title}
            width={640}
            height={360}
          />
          <StyledTitleContainer>
            <h2>{data.title}</h2>
            <p>
              <strong>Ingredients: </strong>
              {data.ingredients.join(", ")}
            </p>
            <p>
              <strong>Description: </strong>
              {data.description}
            </p>
          </StyledTitleContainer>
        </StyledRecipeCard>
        <StyledLink href="/">← Back to all</StyledLink>
      </StyledCardContainer>
    </>
  );
}
