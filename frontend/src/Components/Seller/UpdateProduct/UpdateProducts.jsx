import React from 'react'
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-dom'
import { DataContext } from '../../../Context/Context';
import { useHistory, useParams } from 'react-router-dom'


function UpdateProduct() {
  const { id } = useParams();
  console.log(id)
  const { Sellers, AdminTrue, Cartcount } = useContext(DataContext)
  const [adminTrue, setadminTrue] = AdminTrue
  const [cartCount, setcartCount] = Cartcount
  const [res, setres] = useState(false)
  const history = useHistory()




  const [show, setShow] = useState(false);


  const [image, setimage] = useState()
  const [isloading, setisloading] = useState(false)
  const [url, seturl] = useState()

  const [input, setinput] = useState({
    Name: '',
    Category: '',
    Price: '',
    Description: ''
  })
  const getData = () => {
    axios.get(`http://localhost:8080/seller/seller-edit/${id}`).then((result) => {
      console.log(result)
      setinput(result.data)
    })
  }
  const handleChange = (e) => {

    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const handleAdd =  () => {
    // e.preventDefault()
     axios.post('http://localhost:8080/seller/seller-editprod', { id: id, input: input }).then((res) => {
      console.log(res);
    window.location.href="/seller-viewprod"
    alert('edited')
    })
  }
  const handleClose = () => {
    setShow(false);
    history.push('/seller-viewprod')
  }
  const handleShow = () => {
    setShow(true);

  }

  useEffect(() => {
    getData()
    setadminTrue(false)

    handleShow()
  }, [])

  return (
    <div>

      <div>
        <div className="container">
          <form method='POST' id="contact" onSubmit={handleAdd} >
            <h3>UPDATE PRODUCTS</h3>
            <input type="text" onChange={handleChange} name='Name' value={input.Name} placeholder='Name' /><br />
            <input type="text" onChange={handleChange} name='Category' value={input.Category} placeholder='Category' /><br />
            <input type="text" onChange={handleChange} name='Price' value={input.Price} placeholder='Price' /><br />
            <input type="text" onChange={handleChange} name='Description' value={input.Description} placeholder='Description' />
            <button name="submit" type="submit" >
              {isloading ? "confirm" : "Update Product"}{" "}
            </button>
            <button name="submit" type="reset" onClick={handleClose}>
              Close
            </button>
          </form>
        </div>

        {/* try */}
      </div>
    </div>
  )
}

export default UpdateProduct
