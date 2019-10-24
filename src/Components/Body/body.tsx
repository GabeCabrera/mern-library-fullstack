import React, { useState, useEffect, FC } from "react";
import axios from 'axios';
import './body.css';

interface Book {
  read: boolean;
  _id: string;
  title: string;
  genre: string;
  author: string;
  links: any;
};

export const Body: FC = () => {
  const [booksData, setBooksData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/api/books'
      );
      setBooksData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {(() => {
        if (booksData && booksData[0]) {
          return booksData.map((book: Book, i: string) => {
            return (
              <div className="book" key={book._id}>
                <h2 className="book-title">Book: {book.title}</h2>
                <h3 className="book-desc">Author: {book.author}</h3>
                <h3 className="book-desc">Genre: {book.genre}</h3>
                <br />
              </div>
            )
          });
        }
      }
      )()}

    </div>
  );
};
export default Body;
