
import React, {useEffect, useState} from 'react';

import axios from 'axios';

//components
import Search from './components/Search';
import ShowUser from './components/ShowUser';
import  UserList from './components/UserList';

import Loading from  './Loading';

//route this later
import UserCard from './components/UserCard';

//stylesheet

import './App.css'
const apiUrl = 'https://randomuser.me/api/?results=20';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const dsUsers = ()=> {
    setLoading(true);
    axios.get(apiUrl)
    .then((response) => {
      
      const allUsers = response.data.results;
      setLoading(false);
      setUsers(users)
      console.log(allUsers)
    })
    .catch(error => console.error(`Error: ${error}`));
  };
  useEffect(() =>{
    dsUsers();
  }, [])

  return (
    <div className="container">
       <section className="query-wrap">
         <div className="welcome-text">
            <div className="hello">Hello, </div><span>Ahuoyiza</span>
            <p>Welcome to your  dashboard kindly sort through the user base</p>
         </div>
         <Search />
         <ShowUser />
       </section>
       <section className="view-wrap">
         <h1 className="filter-title">All Users
         </h1>
         <p>Filter by
         </p>
          <div className="filter-wrap">

            <div className="find">
              <div className="icon"><i class="fa fa-search" aria-hidden="true"></i></div>
              <div className="input-wrap">
                <input
                    className="search "
                    type="search"
                    placeholder="Find a user"
                    
                />
              </div>
            </div>

            <div className="country-select">
              <select>Country 
                
                  <i className="fa fa-caret-down" aria-hidden="true">
                  </i>
                 
                  <option value="name-of-country">placeholder</option>
              </select>
            </div>

            <div className="show-country">
              <div className="toggle">
                <button></button>
              </div>
              <div className="text">Show Country</div>
            </div>
          </div>


       
         <UserList users = {users} />
       </section>
      
    </div>
  )
}

export default App
