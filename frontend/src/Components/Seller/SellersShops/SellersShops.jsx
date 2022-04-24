import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../Context/Context';
import './SellerShops.scss'

function SellersShops() {
    const [shops, setShops] = useState([]);
    const { seller } = useContext(DataContext);

    const getShops = async () => {
        const response = await axios.get(`http://localhost:8080/seller/all-shop/${seller._id}`);
        console.log(response.data)
        setShops(response.data)
    }

    useEffect(() => {
        getShops()
    }, [])
    return (
        <div>
            {
            shops.map((shop) => {
                return (
                   <div>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />

                <div className="shop_profile_container">
                <h2>Shop Profile</h2>
                <div class="shop_profile">
                    <div class="shop_profile-pic">
                        <div class="shop_header-color"></div>
                        <img
                            src={shop?.url}
                            alt="Profile Picture"
                        />
                    </div>
                    <div class="shop_title">
                        <h2>
                            Name:<i>{shop.Name}</i>
                        </h2>
                        <br />
                        <h4>
                            Category:<i>{shop?.Category}</i>
                        </h4>
                        <br />
                        <h4>
                            Phone Number:<i>{shop?.Phone}</i>
                        </h4>
                        <br />
                        <h4>
                            Address:<i>{shop?.Location}</i>
                        </h4>
                        <br />
                    </div>
                </div>
            </div>
            </div>
                )
            })
        }

            

        </div>
    )
}

export default SellersShops