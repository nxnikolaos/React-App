import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";

//setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg",
    title: "Where the Crawdads SIng",
    author: "Delia Owens",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL300_SR300,200_.jpg",
    title: "Verity",
    author: "Colleen Hoover",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL300_SR300,200_.jpg",
    title: "Verity",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book-cover"></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

//React v17 render
//ReactDΟΜ.render(<BookList />, document.getElementById("root"));

//React v18 render
const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(<BookList />);
