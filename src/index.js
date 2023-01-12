import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";

//setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg",
  title: "Where the Crawdads SIng",
  author: "Delia Owens",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL300_SR300,200_.jpg",
  title: "Verity",
  author: "Colleen Hoover",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props; destructuring of objects
  return (
    <article className="book">
      <img src={img} alt="book-cover"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

//React v17 render
//ReactDΟΜ.render(<BookList />, document.getElementById("root"));

//React v18 render
const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(<BookList />);
