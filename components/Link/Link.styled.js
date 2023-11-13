import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  z-index: 1;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  border: none;
  padding: 2rem 1rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline 5px var(--primary-color-hover);
    text-underline-offset: 5px;
    font-weight: bold;
  }
`;
