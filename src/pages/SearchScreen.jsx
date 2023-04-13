import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import { Characters } from '../models/Characters'
import Card from '../components/Card';

const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search)

  const [inputValue, setInputValue] = useState(q)
  const [characters, setCharacters] = useState([])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`)
  }

  const getCharacters = () => {
    if (inputValue.trim() !== '') {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Characters.filter((character) => 
        character.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(newValue);
    }

    else (
      setCharacters([])
    )
  }

  useEffect(() => {
    getCharacters()
  }, [q])
  

  return (
    <div className='container mt-3'>
      <h1>Search Screen</h1>
      <hr/>

      <div className="row">
        <div className="col-6">
          <h3>Search</h3>
          <form onSubmit={handleSubmit}>
            <label className='from-label mt-2' >
              <input 
                className='form-control' 
                autoComplete='off' 
                value={inputValue}
                onChange={handleChange}
                placeholder='Character Name'
                type='text'
              />
            </label>
            <button className="btn btn-info mx-3" type='submit'>Search</button>
          </form>
        </div>

        <div className='col-6'>
          <h2>Results: {characters.length}</h2>
          {
            characters.length === 0 && <div className="alert alert-warning text-center">Please search for a character</div>
          }
          {
            characters.map(character => <Card key={character.id} {...character} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen