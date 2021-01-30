
import React, {useEffect, useState} from 'react';

import axios from 'axios';

//components
import Search from './components/Search';
import ShowUser from './components/ShowUser';
import  UserList from './components/UserList';

//import Loading from  './Loading';



//stylesheet

import './App.css'

const App = () => {
  
  const [users, setUsers] = useState([]);

  const apiUrl = 'https://api.enye.tech/v1/challenge/records/?_limit=10';

  useEffect( () => {
    getCustomerData();
  }, [] );

  const getCustomerData = ()=> {
    axios.get(apiUrl)
    .then((response) => {
      
      const allCustomers = response.data.records.profiles;
      setUsers(allCustomers)
      //console.log()
    })
    .catch(error => console.error(`Error: ${error}`));
  };
 

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
         
         <UserList users = {users} />
       </section>
      
    </div>
  )
}

export default App
