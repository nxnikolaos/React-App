import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";
//data(not a keyword) is exported const from book.js
import { data } from "./books";
//default import can have different name from defautl export of file
import SpecificBook from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

//React v17 render
//ReactDΟΜ.render(<BookList />, document.getElementById("root"));

//React v18 render
const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(<BookList />);
