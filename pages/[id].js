import useSWR from "swr";
import { useRouter } from "next/router";
import Recipe from "@/components/Recipe";
import { StyledLink } from "@/components/Link/Link.styled";

export default function RecipeDetailPage() {
  return (
    <>
      <Recipe />
    </>
  );
}
