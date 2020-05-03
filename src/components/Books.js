import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AllContext } from '../context/AllContext'

export default function Books() {

    const [books] = useContext(AllContext)
    

    const bookAuthors = authors => {
        if (authors.length <= 2) {
          authors = authors.join(' and ');
        } else if (authors.length > 2) {
          let lastAuthor = ' and ' + authors.slice(-1);
          authors.pop();
          authors = authors.join(', ');
          authors += lastAuthor;
        }
        return authors;
      };
    
    return (
        <div>
            <ul className='list-group'>
              {
                books.items.map((book, index) => {
                  return (
                    <li className='list-group-item' key={index}>
                      <Link to={`/books/${book.id}`}>
                      <div>
                        <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                        <div>
                          <h3>{book.volumeInfo.title}</h3>
                          <p>{ bookAuthors(book.volumeInfo.authors) }</p>
                          <p>{book.volumeInfo.publishedDate}</p>
                        </div>
                      </div>
                      <hr />
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
        </div>
    )
}
