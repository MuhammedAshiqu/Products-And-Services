import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./EditService.scss";

function EditService() {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [input, setinput] = useState({
    name: "",
    email: "",
    item: "",
    location: "",
    contact: "",
  });
 
  const getService = () => {
    axios
      .get("http://localhost:8080/admin/getService/" + id)
      .then((result) => {
          setinput(result.data)
         
      })
  }
  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      console.log(input)
    e.preventDefault();
    axios
      .post("http://localhost:8080/admin/editService", { id, input })
      .then((result) => {
        
        window.location.href = "/admin-allservices";
        alert("Edited");
      });
  };
  const handleClose = () => {
    setShow(false);
    history.push("/admin-allservices");
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    getService();
    
  }, []);
  return (
    <div>
      {/* <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="demo">
              <input
                type="text"
                name="item"
                placeholder="item"
                onChange={handleChange}
              />
            </div>
            <div className="demo1">
              <input
                type="text"
                name="location"
                placeholder="location"
                onChange={handleChange}
              />
            </div>
            <div className="demo2">
              <input
                type="text"
                name="contact"
                placeholder="contact"
                onChange={handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <div>
              <input type="button" value="submit" onClick={handleSubmit} />
            </div>
            {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
      {/* </Modal.Footer>
        </Modal>
      </> */}

      {/* try */}

      <div class="container">
        <form id="contact" method="POST" onSubmit={handleSubmit}>
          <h3>Edit Service</h3>

         <input
            type="text"
            onChange={handleChange}
            name="name"
            value={input.name}
            placeholder="Your name"
          />

          <input
            placeholder="Your Email Address"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />

          <input
            placeholder="Job"
            type="text"
            name="item"
            onChange={handleChange}
            value={input.item}
          />

          <input
            placeholder="Your Phone Number"
            type="tel"
            name="contact"
            onChange={handleChange}
            value={input.contact}
          />

          <input
            placeholder="Location"
            type="text"
            name="location"
            onChange={handleChange}
            value={input.location}
          />

          <button name="submit" type="submit">
            Submit
          </button>
          <button name="submit" type="reset" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </div>

      {/* try */}
    </div>
  );
}

export default EditService;
