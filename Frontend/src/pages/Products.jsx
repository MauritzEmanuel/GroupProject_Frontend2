import { useState, useEffect } from "react";
import axios from "axios"
import ProductListItems from '../components/ProductlistItem'


const Product = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/products/`)
            setProducts(response.data)
        }
        catch (error) {
            console.error('Error fetching data: ', error)
        }
    }

    
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div>
                <h1>Våra böcker</h1>

                <ul>
                    {Array.isArray(products) && products.map((product) => (
                        <ProductListItems key={product.id} product={product}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Product