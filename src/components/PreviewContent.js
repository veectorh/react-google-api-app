import React from 'react'

export default function PreviewContent({ book }) {

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
    const createDescMarkup = description => {
        return { __html: description };
      };

    return (
        <div className='pt-4'>
            <section>
              <div>
                <img
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                  <h3>
                    <strong>Title:</strong> {book.volumeInfo.title}
                  </h3>
                  <p>
                    <strong>Authors:</strong> {bookAuthors(book.volumeInfo.authors)}
                  </p>
                  <p>
                    <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
                  </p>
                  <p>
                    <strong>Publisher:</strong> {book.volumeInfo.publisher}
                  </p>
                  <p>
                    <strong>Page Count:</strong> {book.volumeInfo.pageCount}
                  </p>
                  <div
                    dangerouslySetInnerHTML={createDescMarkup(
                      book.volumeInfo.description
                    )}
                  />
                </div>
              </div>
            </section>
        </div>
    )
}
