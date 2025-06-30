import React from 'react';
import { books } from '../data/books';
import '../styles/Home.css';

const Home = () => (
  <div className="home">
    {books.map((book) => (
      <div className="book-card" key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default Home;