import { styled } from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 3rem;
  z-index: 1;
`;

const StyledNavLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  text-decoration: none;
`;

export const Navigation = () => {
  return (
    <StyledNavList>
      <li>
        <StyledNavLink href="#our-story">Our Story</StyledNavLink>
      </li>
      <li>
        <StyledNavLink href="#details">Details</StyledNavLink>
      </li>
    </StyledNavList>
  );
};
