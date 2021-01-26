import React from 'react';


import  '../stylesheets/user-card.css'

const UserCard = () => {
    return (
        <div className="card-container">
            <div className="return"><span><i className="fa fa-arrow-left" aria-hidden="true"></i></span>RESULTS</div>

            <div className="card">
                <div className="img-container">
                    <img src="tftg.jpg" alt="tyyyyy"/>
                </div>
                <div className='user-info'>
                    <div className="userName">
                        <span className="title">Mrs</span>Shalom Chioma<span className="age">25</span>
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
                        <div className="joined">
                            <div>JOINED:</div>
                            <div>2002-05-21</div>
                        </div>
                        <div className="number">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="tel:048365">032294020</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserCard
