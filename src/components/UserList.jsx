import React from 'react';

import '../stylesheets/user-list.css'

const UserList = ({users}) => {
    console.log(users)
    //searchResult.map();
    
    if(users.length > 0){
        return users.map((user, index) => {
           // console.log(user);
            return (
                 <div className="user-list-wrap" key={index}>
                    <div className='user-info'>
                        <div className="user-personal">
                            <div className="userName">
                                @{user.UserName}
                            </div>
                            <div className="name">
                                {user.FirstName}<span>{user.LastName}</span>
                            </div>
                            <div className="credit-card">
                            Gender: {user.Gender}
                            </div>
                        </div>
                        <div className="user-pay">
                            <div className="payment">
                                Payment Method: {user.PaymentMethod}
                            </div>
                            <div className="credit-card">
                            Gender: {user.CreditCardNumber}
                            </div>
                            <div className="address">
                            {user.URL}
                            </div>
                            <div className="contact">
                                <div className="email">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    <a href="mailto:example@gmail.com">
                                        {user.Email}
                                    </a>
                                </div>
                                <div className="number">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:048365">{user.PhoneNumber}</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )
        })
    }else {
        return (<div>No Users found</div>)
    }
}

export default UserList
