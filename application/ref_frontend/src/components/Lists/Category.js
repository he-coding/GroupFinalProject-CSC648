import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import axios from 'axios';
import "../../style/lists.css";

const Category = ({  }) => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([])
  const [isOpen, setOpen] = useState(false);
  // const data = [{id: 0, label: "Fruit"}, {id: 1, label: "Vegetable"}, {id:2, label: "Meat"}, {id:3, label: "Dairy"}, {id:4, label: "Other"}];

  // const [its, setIt] = useState(data);
  // const [selectedItem, setSelectedItem] = useState(null);

    const [itemInfo, setItemInfo] = useState({
        name: '',
        type: '',
        list: '',
        exp_date: ''
    })
  //   const toggleDropdown = () => setOpen(!isOpen);
  
  //   const handleItemClick = (id, label) => {
  //     selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  //     console.log(label)
  //   }
    const handleChange = (event) => {
        setItemInfo({...itemInfo, [event.target.name]: event.target.value})
        console.log(event.target.value)
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
            type: itemInfo.type,
            list:'fridge',
            exp_date: itemInfo.exp_date
        } 
        axios.post("http://localhost:8000/api/getAllItems", item).then(response => {
            if (response.status === 201) {
                setItems([...items, response.data])
                setShow(false)
            } else {
                // error
            }
            
        })
        setShow(false)
    }
    const deleteItems = () => {
        axios.delete("http://localhost:8000/api/getAllItems").then(response => {
            if (response.status === 201) {
                setItems([])
            }
        })
    }

    return (
      <div>
        <div className="category-item">
          <div className="category-primary">
            <div className="title">
              <h1>
                Items
              </h1>
            </div>
            <div className="add-item">
              <Button variant="primary" style={{backgroundColor: "#34c972", borderColor: "#34c972"}} onClick={() => setShow(true)}>
                +
              </Button>
            </div>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h1>Add an item</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <div className="row">
                  <div className="col">
                    Name: 
                    <input values={itemInfo.name} name="name" onChange={handleChange}></input>
                  </div>
                  <div className="col">
                    Type
                    <input values={itemInfo.type} name="type" onChange={handleChange}></input>
                    {/* <div className='drop'>
                      <div className='drop-header' onClick={toggleDropdown}>
                        {selectedItem ? its.find(it => it.id == selectedItem).label : "Category: "}
                        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                      </div>
                      <div className={`drop-body ${isOpen && 'open'}`}>
                        {its.map(it => (
                          <div className="drop-item" onClick={e => handleItemClick(e.target.id, e.target.label)} id={it.id} label={it.label}>
                            <span className={`drop-item-dot ${it.id == selectedItem && 'selected'}`}>• </span>
                            {it.label}
                          </div>
                        ))}
                      </div>
                    </div> */}
                  </div>
                 
                </div>
                <div className="row">
                  <div className="col">
                    <label for="exp">Expiration date:
                      <input type="date" id="exp" name="exp_date"
                            min="2021-05-01" max="2025-05-31" required onChange={handleChange}></input>
                    </label>
                  </div>
                </div>
                
                <Button onClick={addItem} className='button_add'>add item</Button>
              </Modal.Body>
              <Modal.Footer>
                <Button style={{backgroundColor: "#34c972", borderColor: "#34c972"}} onClick={() => setShow(false)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        {/* <div className="category-name">
                    <p className="foodname-item">Item: </p> 
                    <p>Category: itemname </p>
                    <Button onClick={deleteItems} className="remove-button">-</Button>
        </div> */}
            {items.map((item, id) => {
                return (
                  <a className="refn" href={`/item/${id}`}>
                    <div className="category-name" key={id}>
                      <p className="foodname-item">Item: {item.name} </p> 
                      <p className="category"> Category: {item.type} </p>
                      <Button onClick={deleteItems} className="remove-button">-</Button>
                    </div>
                  </a>
                  
                )
            })}
      </div>
    );
  };
  export default Category;