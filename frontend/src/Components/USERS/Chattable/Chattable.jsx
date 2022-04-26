import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Context/Context'

function ChatTable() {
  const { AdminTrue } = useContext(DataContext)
  const [adminTrue, setadminTrue] = AdminTrue
  const [arr, setarr] = useState([]);
  const [send, setsend] = useState([])
  const [seller, setSeller] = useState(
    JSON.parse(localStorage.getItem("seller"))
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getMessages = () => {

    axios.get(`http://localhost:8080/messages/${user?user.Email:seller.Email}`).then((result) => {
      console.log(result.data)
      setarr(result.data)

    })
  }



  useEffect(() => {
    setadminTrue(false)
    getMessages()

  }, [])

  return (

    arr.map((i) => {

      return (<>
        <table class="styled-table">
          <tbody>
            <tr>
              <td><thead>Message From</thead></td>
              <td><Link to={`/chat/${i.sender}`}>{i.sender}</Link></td>
            </tr>
          </tbody>
        </table>
      </>
      )
    })


  )
}

export default ChatTable