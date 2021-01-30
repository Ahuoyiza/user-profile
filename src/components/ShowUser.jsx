import React from 'react';

import '../stylesheets/show-user.css';

const ShowUser = () => {
    
    
    return (
        <div className="show-wrap">
          <h4>Show Users</h4> 
          <div className="users-wrap">
            <div className="all-users">
              <i className="fa fa-venus-mars" aria-hidden="true"></i>
            </div> 
            <div className="male-users">
              <i className="fa fa-mars" aria-hidden="true"></i>
            </div>
            <div className="female-users">
              <i className="fa fa-venus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
    )
}

export default ShowUser
