import React, { useEffect, useState } from "react";
import Image from 'react-bootstrap/Image'
import accountcss from '../../style/account.css';
import Profilepic from '../../images/profile-icon.png'
import Media from 'react-bootstrap/Media'

const Account= ({}) =>{
    return(
        <div className="account-page">
            <div className="div-resize">
                <Media>
                    <Image
                        width={350}
                        height={350}
                        src={Profilepic}
                        roundedCircle
                    />
                    <Media.Body className="body-page">
                        <h1 className="account-info">Account Info</h1>
                        <h1 className='title-name'>Samantha Elizabeth Nazario</h1>
                        <p className='date-created'>Account Created: May 10, 2021</p>
                    </Media.Body>
                </Media>
            </div>
            <div className="div-right">
                <div className="account-details">
                    
                </div>
            </div>
      </div>
        
    )
}

export default Account;