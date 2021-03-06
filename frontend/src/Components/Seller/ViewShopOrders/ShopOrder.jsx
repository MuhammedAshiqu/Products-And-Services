import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Shoporders() {
    const [data, setdata] = useState([]);
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("seller")))
    const getShoporders = () => {
        console.log(user?._id)
        axios
            .get('http://localhost:8080/seller/my-orders/'+user?.Email)
            .then((response) => {
                console.log(response);
                setdata(response.data);
            });
    };

    useEffect(() => {
        getShoporders();
    }, []);

    return (

        <table class="styled-table">
            <thead>
                <tr>
                    <th>Order id</th>
                    <th>Mode of Payment</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((i, index) => (
                    <tr>
                        <td>{i.orderObject?.date}</td>
                        <td>{i.orderObject?.paymentMethod}</td>
                        <td>{i.orderObject?.totalAmount}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Shoporders;
