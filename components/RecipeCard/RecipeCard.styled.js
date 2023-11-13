import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import FavIconSvg from "@/public/lemon.svg";

export const StyledTitle = styled.h1`
  place-items: center;
  text-align: center;
  gap: 20px;
  width: 100%;
  border-bottom: solid 2px var(--neutral-color);
  font-size: 2em;
  padding-bottom: 20px;
`;

export const StyledFavIconLemon = styled(FavIconSvg)`
  height: 1em;
  fill: var(--primary-color);
`;

export const StyledLemon = styled.i`
  font-size: 1.2em;
  color: var(--primary-color);
`;

export const StyledCardContainer = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 20px;
  place-content: center;
`;

export const StyledRecipeCard = styled.li`
  position: relative;
  place-content: center;
  max-width: 640px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--neutral-color) 0px 2px 1px, var(--neutral-color) 0px 4px 2px,
    var(--neutral-color) 0px 8px 4px, var(--neutral-color) 0px 16px 8px,
    var(--neutral-color) 0px 32px 16px;
`;

export const StyledTitleContainer = styled.div`
  padding: 10px 20px 10px 20px;
  display: grid;
  gap: 0px;
`;

export const StyledRecipeLink = styled(Link)`
  display: block;
  font-size: 1.2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    text-decoration: underline 5px var(--primary-color-hover);
    text-underline-offset: 5px;
    font-weight: bold;
  }
`;

export const StyledRecipeImage = styled(Image)`
  overflow: clip;
  overflow-clip-margin: content-box;
`;
