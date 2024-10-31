import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Hero = () => {
  const [name, setName] = useState("");
  const [publication_date, setPublication_date] = useState("");
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const AddBook = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("publication_date", publication_date);
    formField.append("genre", genre);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/books/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  const getBooks = async () => {
    const response = await axios.get("http://localhost:8000/api/books/");
    setBooks(response?.data);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <h1>
            It's me,<br></br> Saroj Dahal
          </h1>
          <p>
            I'm Saroj Dahal, a 21-year-old IT student specializing in
            Cybersecurity. <br></br>I'm eager to combine my cybersecurity
            knowledge with full-stack development skills to<br></br> tackle
            real-world challenges and drive innovation.
          </p>
          <p>Follow Me:</p>
          <img src="/public/images/vite.svg" alt="" />
          <img src="/public/images/vite.svg" alt="" />
          <img src="/public/images/vite.svg" alt="" />
          <img src="/public/images/vite.svg" alt="" />
        </div>
        <div className="hero-image">
          <img src="/public/images/vite.svg" alt="iujyhg" />
        </div>
      </main>

      <h1>ADD Books Name:</h1>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your book name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        className="form-control form-control-lg"
        placeholder="Enter Publication Date"
        name="publication_date"
        value={publication_date}
        onChange={(e) => setPublication_date(e.target.value)}
      />
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Your book genre"
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <Button className="btn btn-success" onClick={AddBook}>
        Sumit
      </Button>

      <h1>Show the list of all the books:</h1>
      <div className="card_1">
        {books.map((book, index) => (
          <div>
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body key={book.id}>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>{book.publication_date}</Card.Text>

                <Button>{book.genre}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Hero;
