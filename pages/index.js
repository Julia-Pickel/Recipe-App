import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("api/recipes");
  console.log(data);

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
      <StyledTitle>🥤 Refreshing Lemonades</StyledTitle>
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

const StyledTitle = styled.h1`
  place-items: center;
  text-align: center;
  gap: 20px;
  width: 100%;
  border-bottom: solid 2px var(--neutral-color);
  font-size: 2em;
  padding-bottom: 20px;
`;

const StyledCardContainer = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 20px;
  place-content: center;
`;

const StyledRecipeCard = styled.li`
  position: relative;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--neutral-color) 0px 2px 1px, var(--neutral-color) 0px 4px 2px,
    var(--neutral-color) 0px 8px 4px, var(--neutral-color) 0px 16px 8px,
    var(--neutral-color) 0px 32px 16px;
`;

const StyledTitleContainer = styled.div`
  padding: 10px 20px 20px;
  display: grid;
  gap: 20px;
`;

const StyledRecipeLink = styled(Link)`
  display: block;
  font-size: 1.2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  /* display: grid;
  padding: 20px 0px 20px 40px; */
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    text-decoration: underline 5px var(--primary-color-hover);
    text-underline-offset: 5px;
    font-weight: bold;
  }
`;

const StyledRecipeImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
`;

/* const StyledRecipeLink = styled(Link)`
  text-decoration: none;
  color: var(--third-color);
  padding: 10px;
  line-height: 35px;
  width: 300px;
  border: 1px solid var(--third-color);
  &:hover {
    background-color: var(--second-color);
    color: var(--forth-color);
  }
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  margin: 0;
  z-index: 10; */
