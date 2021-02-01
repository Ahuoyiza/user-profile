import React from 'react';

import '../stylesheets/show-user.css';

const ShowUser = ({onClickAll}) => {
    //console.log(onClickAll);
    
    return (
        <div className="show-wrap">
          <h4>Show Users</h4> 
          <div className="users-wrap">
            <div className="all-users" onClick={onClickAll}>
              <i className="fa fa-venus-mars" id="all" aria-hidden="true"></i>
            </div> 
            <div className="male-users" onClick ={onClickAll}>
              <i className="fa fa-mars" id="male" aria-hidden="true"></i>
            </div>
            <div className="female-users" onClick = {onClickAll}>
              <i className="fa fa-venus" id="female" aria-hidden="true"></i>
            </div>
          </div>
        </div>
    )
}

export default ShowUser
