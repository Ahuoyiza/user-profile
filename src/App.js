
import React, {useEffect, useState} from 'react';

import axios from 'axios';

//components
import Search from './components/Search';
import ShowUser from './components/ShowUser';
import  UserList from './components/UserList';

//stylesheet

import './App.css'

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchUser, setSearchUser] = useState("");
  
  
  //const [searchResult, setSearchResult] = useState([]);

  const apiUrl = 'https://api.enye.tech/v1/challenge/records/';

  useEffect( () => {
    getCustomerData();
  }, [] );

  const getCustomerData = ()=> {
    axios.get(apiUrl)
    .then((response) => {
      
      const allCustomers = response.data.records.profiles
      
      setUsers(allCustomers)
      
      //console.log()
    })
    .catch(error => console.error(`Error: ${error}`));
  };

  const handleChange = (e) => {
    setSearchUser( e.target.value);
   // console.log(e.target.value);

  }
 
  
 const onClickAll = (e) => {
  // console.log(e.target.id)
  
    if(e.target.id === "male") {
  
    setFilter("male");
   }else if(e.target.id === "female"){
    
    setFilter("female");
   } else{
     setFilter("");
   }
  
 };

 const filterUsers = () => {
   let filteredUsers = users;
   if(filter){
     filteredUsers = users.filter(user => user.Gender.trim().toLowerCase() === filter)
   }
   if(searchUser){    
    filteredUsers = filteredUsers.filter(user =>{
      let username = `${user.FirstName} ${user.LastName}`;
      console.log(username);
    return   username.trim().toLowerCase().includes(searchUser.toLowerCase())
    });
   }
   return filteredUsers
 }


  

  return (
    <div className="container">
       <section className="query-wrap">
         <div className="welcome-text">
            <div className="hello">Hello, </div><span>Ahuoyiza</span>
            <p>Welcome to your  dashboard kindly sort through the user base</p>
         </div>
         <Search handleChange = {handleChange}/>
         <ShowUser onClickAll= {onClickAll} />
       </section>
       <section className="view-wrap">
         <h1 className="filter-title">All Users
         </h1>
         
         <UserList users = {filterUsers()}  />
       </section>
      
    </div>
  )
}

export default App
