import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PreviewContent from './PreviewContent'
import { Link } from 'react-router-dom'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

export default function Previews({ match }) {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #36d7b7;
`;

    const {
        params: { bookid },
    } = match
    
    const [error, setError] = useState(false)
    const [isloading, setIsloading] = useState(false)
    const [book, setBook] = useState(null)
    
    useEffect(() => {
    const API_BASE_ROUTE = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBook = async () => {
        setIsloading(true);
        setError(false);
        try {
          const result = await axios.get(`${API_BASE_ROUTE}/${bookid}`);
          setBook(result.data);
        } catch (error) {
          setError(true);
        }
        setIsloading(false);
      };
      // Call the API
      fetchBook();
    }, [bookid]);
    return (
        <div>
            <Link to='/home' className='h4 pt-4'>back to search</Link>
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={isloading}
            />
            {error && (
                <div style={{ color: `red` }}>
                  some error occurred, while fetching api
                </div>
            )}
            {book && <PreviewContent book={book} />}
        </div>
    )
}
