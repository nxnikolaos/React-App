import React from "react";
import ReactDom from "react-dom";

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

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="book-cover"></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
