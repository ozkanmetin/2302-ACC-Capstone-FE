import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';

export const View = () => {
    let { id } = useParams();

    const [item,setItem] = useState(null);
    const [quantity,setQuantity] = useState(1);
    
    useEffect(() => {
        const getSingleData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/'+id);
                const result = await response.json();
                setItem(result);
            } catch (err) {
                console.error(err);
            }
        }
        getSingleData();
    }, []);

    let count=0;
    for(let key in item) { ++count; }
    if(count>0) {
        return (
            <div>
                <h2>{item.title}</h2>
                <h3>Price: {item.price} USD</h3>
                <p>
                    <label className="label">Quantity: </label><input id="count" value="1" size="1" maxLength="2" onChange={e => setQuantity(e.target.value)} />&nbsp;
                    <button onClick={()=>navigate("/Cart/"+item.id)}>Add to Cart</button>
                </p>
                <h4>Rating: {item.rating.rate} stars</h4>
                <h4>Category: {item.category}</h4>
                <p>{item.description}</p>
                <p><img src={item.image} alt={item.title} /></p>

            </div>
        )
    } else {
        <div>
            <h3>Error: No data</h3>
        </div>
    }
}