import React from 'react'
import axios from 'axios'
import { Button, Container, Dropdown, DropdownButton ,Navbar ,Nav ,NavDropdown ,NavLink} from 'react-bootstrap'
import './Adminheader.scss'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Adminheader() {
  const history=useHistory()

  const logout=()=>{
    axios.get('http://localhost:8008/admin/signout').then((response)=>{
      console.log(response);
      history.push('/admin')
    })
  }
    return (
              
            <div className="mainhead">
                <div className='left'>
                  {/* <h1>Admin Page</h1>   */}
                </div>
                <div className='right' >
                  {/* <Link to='/admins' ><button>-</button></Link>  */}
                   
                    
                    
                    
                </div>
                <nav className="navbar navbar-dark bg-blue">
  <h2 className="nav-brand">Admin Panel</h2>
  <div className="navbar-nav">
    <ul className="nav-list">
      <li className="nav-item">
                   <Link to='/adminhome' > Product </Link>  
      </li>
      <li className="nav-item">
      <Link to='/getallusers' > User</Link> 

      </li>
      <li className="nav-item">
      <Link to='/getallsellers' > Seller</Link>

      </li>
      <li className="nav-item">
      <Link to='/allorders' > Orders</Link> 

      </li>
      <li className="nav-item">
      <Link to='/getallshops' > Shop</Link> 

      </li>
      <li className="nav-item">
      <Link to='/service' >addService</Link>

      </li>
      <li className="nav-item">
      <Link to='/admin' onClick={logout}>LOGOUT</Link>

      </li>
    </ul>
  </div>
</nav>

                </div>
              
    
            
         
        
    )
}

export default Adminheader
