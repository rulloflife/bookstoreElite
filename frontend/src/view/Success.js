import { Link } from 'react-router-dom'
import { useState } from 'react';

const OrderList = () => {
    const [data, setData] = useState([]);
    // const data = JSON.parse(localStorage.getItem('cart'));
    const user = JSON.parse(localStorage.getItem('user-info'));

    async function orderbyuser(key) {
        let result = await fetch("http://localhost:8000/api/orderbyuser/" + key);
        result = await result.json();
        setData(result)
    }
    orderbyuser(user.id);

    function clickname(){
        
    }
    return (
        <section className="success">
            <h1>My order</h1>
            
            <div className="justify-content-center">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td onClick={clickname}>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td> 
                                <td><img style={{ width: 100 }} src={"http://localhost:8000/" + item.imageUrl} /></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            </div>

        </section>
    )
}

export default OrderList
