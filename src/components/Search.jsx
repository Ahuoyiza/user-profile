import React from 'react';

import '../stylesheets/search.css';

const Search = ({handleChange, searchUser}) => {

  
    return (
        <div className="search-wrap">
            <div className="icon"><i className="fa fa-search" aria-hidden="true"></i></div>
            <div className="input-wrap">
                <input
                    className="search "
                    type="search"
                    placeholder="Find a user"
                    value={searchUser}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Search
