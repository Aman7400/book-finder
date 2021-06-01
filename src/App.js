import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Book from "./components/Book";
const HeroText = styled.h1`
  color: var(--white);
  font-size: 4rem;
  font-family: Kaushan Script, cursive;
  filter: drop-shadow(0 0 0.75rem #000);
`;

const Button = styled.button`
  margin: 0.25rem;
  font-size: larger;
  border: none;
  color: var(--white);
  font-family: "Kaushan Script", cursive;
  border-radius: var(--borderRadius);
  background-color: var(--primaryColor);

  padding: 0.25rem 2rem;
`;

function App() {
  const [search, setSearch] = React.useState("");
  const [books, setBooks] = React.useState([]);

  const [query, setQuery] = React.useState("Harry Potter");

  // Make API Request

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=newest`;

  React.useEffect(() => {
    const getData = async () => {
      const res = await (await fetch(url)).json();
      // console.log(res.items);
      setBooks(res.items);
    };

    getData();
  }, [url]);

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.jpeg')",
      }}
      className="App"
    >
      <Navbar />
      <section className="heading">
        <HeroText>Fuel Your Reading</HeroText>
      </section>

      <div className="search-bar">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Try Potter ..."
          type="text"
        />
        <Button
          onClick={() => {
            setQuery(search);
            setSearch("");
          }}
        >
          Find
        </Button>
      </div>

      <div className="books-container">
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              imgSrc={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              link={book.volumeInfo.infoLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
