import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import  '../../../style/account.css';
import Profilepic from '../../../images/avocado.jpg'
import Media from 'react-bootstrap/Media'
import axios from 'axios';

// import Recipe from "./Recipe";

const ItemPage= ({}) =>{
let params = useParams();  
const [items, setItems] = useState([])
useEffect(() => {
    const getAllItem = async () => {
        await axios(`http://localhost:8000/api/getAllItems/${params.id}`).then(response => response.data).then((data) => {
            setItems(data)
        })
    }
    getAllItem()
}, [])

    return(
        <div className="account-page">
           <Link to="../lists">Back to List</Link>
            <div className="div-resize">
                <Media>
                    <Image
                        width={350}
                        height={350}
                        src={Profilepic}
                        roundedCircle
                    />
                    <Media.Body className="body-page">
                        <h1 className="account-info">Item Info</h1>
                        <h1 className='title-name'>Name: Avocado</h1>
                        <p className='date-created'>Category: Fruit</p>
                        <p className='date-created'>Expiring Date: 2021-05-28</p>
                    </Media.Body>
                </Media>
            </div>
            <div className="div-right">
            <h1 className="account-info">Recipes</h1>
                {/* {recipe.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredient={recipe.recipe.ingredients}
                />
                ))} */}
            </div>
      </div>
        
    )
}

export default ItemPage;