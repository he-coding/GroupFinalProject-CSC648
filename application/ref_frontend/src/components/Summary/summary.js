import React, { useEffect, useState } from "react";
import Image from 'react-bootstrap/Image'
import Profilepic from '../../images/profile-icon.png'
import '../../style/summary.css'
import { PieChart } from 'react-minimal-pie-chart';


const Account= ({}) =>{
    return(
        <div className="summary-page">
            <div className="summary-title rowC">
                <h1 className="colC">Today</h1>
                <h1 className="colC">Nutritional Summary</h1>
            </div>
            <div className="stats-details">
                <div className="piechart-div">
                    <PieChart
                        data={[
                            { title: 'One', value: 100, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />;
                    
                </div>
            </div>
            <div className="food-description">
                <div>
                    <h1 className="food-title">Food</h1>
                </div>
                <div>
                    <ul className="description-items">
                        <li className="description-s">
                            Expiring: 2
                        </li>
                        <li className="description-s">Items: 8 </li>
                        <li className="description-s">Eaten: 20</li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default Account;