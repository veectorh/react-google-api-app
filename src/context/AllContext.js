import React, {createContext, useState} from 'react'

export const AllContext = createContext();

export const Allprovider = (props) => {
    const [books, setBooks] = useState({ items: [] })
    const [isloading, setIsloading] = useState(false)
    const [error, setError] = useState(false)
    return (
        <AllContext.Provider 
        value={[
            books, setBooks,
            isloading, setIsloading,
            error, setError]
            }>
            {props.children}
        </AllContext.Provider>
    )
}
