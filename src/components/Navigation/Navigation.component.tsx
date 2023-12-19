import { styled } from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 4rem;
  z-index: 1;
`;

const StyledNavLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.9rem;
  text-decoration: none;
`;

export const Navigation = () => {
  return (
    <StyledNavList>
      <li>
        <StyledNavLink href="#details">Details</StyledNavLink>
      </li>
      <li>
        <StyledNavLink href="#registry">Registry</StyledNavLink>
      </li>
      <li>
        <StyledNavLink href="https://www.zola.com/wedding/jenandwade/rsvp">
          RSVP ↗
        </StyledNavLink>
      </li>
    </StyledNavList>
  );
};
