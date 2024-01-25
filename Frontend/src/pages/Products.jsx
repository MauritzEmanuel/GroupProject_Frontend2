import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"


const Product = () => {

    const getData = async () => {
        const data = await axios.get(`https://localhost:1337/api/products`, { headers: {}})
        console.log(data);
    }

    
    useEffect(() => {
        getData()
    }, [])

    return (
        
        <div>
            <h1>En produktsida</h1>
        </div>
    )
}

export default Product