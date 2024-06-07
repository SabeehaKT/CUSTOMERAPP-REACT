import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "CustomerCode": 101, "CustomerName": "Mark", "Product": "iPhone", "Usage": 2 },
            { "CustomerCode": 102, "CustomerName": "Fred", "Product": "LG Air Conditioner", "Usage": 4 },
            { "CustomerCode": 103, "CustomerName": "Mary", "Product": "Mascara", "Usage": 1 },
            { "CustomerCode": 104, "CustomerName": "Tina", "Product": "Hair Clip", "Usage": 3 },
            { "CustomerCode": 105, "CustomerName": "Roy", "Product": "Impulse Travel Bag", "Usage": 5 }
        ]
    )
    return (
        
        < div >
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Customer Code</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Years of Usage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return <tr>
                                                <th scope="row">{value.CustomerCode}</th>
                                                <td>{value.CustomerName}</td>
                                                <td>{value.Product}</td>
                                                <td>{value.Usage}</td>
                                            </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewAll