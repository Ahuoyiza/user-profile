import React from 'react';

import '../stylesheets/user-list.css'

const UserList = () => {
    return (
        <div className="user-list-wrap">
            <div className="img-container">
                <img src="tftg.jpg" alt="tyyyyy"/>
            </div>
            <div className='user-info'>
                <div className="userName">
                    Shalom Chioma
                </div>
                <div className="address">
                    9278 new road, kilcoole waterford
                </div>
                <div className="contact">
                    <div className="email">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <a href="mailto:example@gmail.com">
                            example@gmail.com
                        </a>
                    </div>
                    <div className="number">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <a href="tel:048365">032294020</a>
                    </div>
                </div>

            </div>
            <div className="view-user">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
            
        </div>
    )
}

export default UserList
