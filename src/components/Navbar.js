import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background: transparent;

  z-index: 1;
  padding: 2rem;
  justify-content: flex-flex-start;

  p {
    font-size: larger;
    margin: 0.5rem;
  }

  color: var(--white);
  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="center">
          <i class="fas fa-book-open fa-2x"></i>
          <p>Book Gains</p>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
