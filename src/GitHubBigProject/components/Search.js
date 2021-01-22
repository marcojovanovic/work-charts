import React from 'react';

import { GitHubContext } from '../context';

import { FcSearch } from 'react-icons/fc';
import Error from './Error'

function Search() {
  const { searchValue, setSearchValue ,handleSubmit, error } = React.useContext(GitHubContext);

  return (

      <>
    {error && <Error /> }
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="form-input" 
        placeholder="Enter User" 
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
        />
    
        <FcSearch className="form-search" />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>

    </>
  );
}

export default Search;
