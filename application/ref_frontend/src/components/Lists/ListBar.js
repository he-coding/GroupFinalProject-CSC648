import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import  "../../style/lists.css";

const ListBar = () =>{
  const [show, setShow] = useState(false);

      return (
        <div className="listContainer">
          <div className="lists-name">
            <h1 className="listname">Lists</h1>
          </div>
  
          <ul className="list-menu">
            <li className="item-position">
              <a className="list-item active" href=""> Fridge</a>
            </li>
            <li className="item-position">
              <a className="list-item" href="">Pantry</a>
            </li>
          </ul>
  
          <div>
            <Button variant="primary" style={{backgroundColor: "#34c972", borderColor: "#34c972"}} onClick={() => setShow(true)}>
              +
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h1>Create a new list!</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center">
                <p>
                  <h3>Name:</h3>
                </p>
                <p>
                  <input name="name"></input>
                  <Button onClick={() => setShow(false)}>Add</Button>
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button style={{backgroundColor: "#34c972", borderColor: "#34c972"}} onClick={() => setShow(false)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div>

          </div>
        </div>
      )
}
  export default ListBar;