import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: var(--borderRadius);
  transition: all 350ms ease-in-out;
  filter: drop-shadow(0 0 0.75rem #000);

  &:hover {
    transform: scale(1.075);
  }
  &:hover a {
    background-color: white;
    color: black;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
`;

const CardInfo = styled.div`
  width: 60%;
  color: var(--white);
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
  }
`;

const Button = styled.a`
  border: 2px solid white;
  color: white;
  background: transparent;
  font-size: large;
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
`;

const Book = ({ title, imgSrc, link }) => {
  return (
    <Card>
      <ImageWrapper>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={imgSrc !== null ? imgSrc : ""}
          alt=""
        />
      </ImageWrapper>
      <CardInfo>
        <h4>{title}</h4>

        <Button href={link}>Know More</Button>
      </CardInfo>
    </Card>
  );
};

export default Book;
