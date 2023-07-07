import React, { useEffect, useState }from 'react'
import axios from 'axios'

const Items = (props) => {

    const [items, setItems] = useState([])
    
    const [itemInfo, setItemInfo] = useState({
        name: '',
        type: ''
    })
    const handleChange = (event) => {
        setItemInfo({...itemInfo, [event.target.name]: event.target.value})
    }
    useEffect(() => {
        const getAllItem = async () => {
            await axios("http://localhost:8000/api/getAllItems").then(response => response.data).then((data) => {
                setItems(data)
            })
        }
        getAllItem()
    }, [])
    const addItem = () => {
        const item = {
            name: itemInfo.name,
            type: itemInfo.type
        } 
        axios.post("http://localhost:8000/api/getAllItems", item).then(response => {
            if (response.status === 201) {
                setItems([...items, response.data])
            } else {
                // error
            }
            
        })
    }
    const deleteItems = () => {
        axios.delete("http://localhost:8000/api/getAllItems").then(response => {
            if (response.status === 201) {
                setItems([])
            }
        })
    }
    return (
        <div className={props.className}>
            {items.map((item, id) => {
                return (
                    <p key={id}>Name: {item.name} Type: {item.type}</p>
                )
            })}
            Name
            <input values={itemInfo.name} name="name" onChange={handleChange}></input>
            Type
            <input values={itemInfo.type} name="type" onChange={handleChange}></input>
            <button onClick={addItem}>add item</button>
            <button onClick={deleteItems}>DELETE ALL</button>
        </div>
    )
}

export default Items
