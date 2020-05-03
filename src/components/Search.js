import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AllContext } from '../context/AllContext'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


export default function Search() {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #36d7b7;
`;
    const [books, setBooks] = useContext(AllContext)
    const [error, setError] = useState(false)
    
    let API_ROUTE = `https://www.googleapis.com/books/v1/volumes`

    const [searchParams, setSearchParams] = useState("")

    const [isloading, setIsloading] = useState(false)

    const onParamsInput = (e) => {
        setSearchParams(e.target.value);
      }

      const getBooks = async () => {
          setIsloading(true)
        setError(false);
        try {
          const result = await axios.get(`${API_ROUTE}?q=${searchParams}`);
          setBooks(result.data);
        }
        catch(error) {
          setError(true);
        }
        setIsloading(false)
      }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submitted')
        getBooks();
    }

    return (
        <div>
            <form style={{display:'flex'}} className='form-group mt-4 p-4' onSubmit={handleSubmit}>
                <input required className='form-control' placeholder='search books' onChange={onParamsInput} />
                <button className='btn btn-success' type='submit'>Search</button>
            </form>
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={isloading}
            />
            {
              error && <div style={{color: `red`}}>some error occurred, while fetching api</div>
            }
        </div>
    )
}
