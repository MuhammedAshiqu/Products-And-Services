import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../../../Context/Context";
function Services() {
  const { Sellers, AdminTrue, Cartcount } = useContext(DataContext);
  const [adminTrue, setadminTrue] = AdminTrue;

  const [data, setdata] = useState([]);
  const getServices = () => {
    axios.get("http://localhost:8080/admin/viewService").then((response) => {
      console.log(response);
      setdata(response.data.service);
    });
  };
  const deleteHandler = (_id) => {
    axios
      .post("http://localhost:8080/admin/service/delete", { _id })
      .then((res) => {
        if (res.data.status) {
          alert("successfully deleted");
          setdata(data.filter((i) => i._id !== _id));
        } else alert("Failed to delete");
      })
      .catch((e) => alert(e.message || "something went wrong"));
  };

  useEffect((e) => {
    setadminTrue(true);
    getServices();
  }, []);
  return (
    <div>
      <div>
        <div className="main-i">
          <table class="styled-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th> Name</th>
                <th> Email</th>
                <th> Job</th>
                <th>Location</th>
                <th>Contact</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.item}</td>
                  <td>{i.location}</td>
                  <td>{i.contact}</td>
                  <td>
                    <button
                      className="btn-primary"
                      onClick={() =>
                        (window.location.href = "/admin-editservice/" + i._id)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn-danger"
                      onClick={() => deleteHandler(i._id)}
                    >
                      Delete
                    </button>
                  </td>
                  {/* <td><button onClick={()=>deleteUser(i._id)}  className='btn btn-danger' >Delete</button></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Services;
