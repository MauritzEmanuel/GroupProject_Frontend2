import { useState, useEffect } from "react";
import axios from "axios"
import ProductListItem from "../components/ProductlistItem";


const Product = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {

        const data = await axios.get(`http://localhost:1337/api/products?populate=*`)
        
        const tempArr = []

        data.data.data.forEach(item => {

            tempArr.push({
                id: item.id,
                title: item.attributes.Title,
                author: item.attributes.Author,
                price: item.attributes.Price,
                image: item.attributes.Image.data.attributes.url
            })
        })

        setProducts(tempArr)
    }

    
    useEffect(() => {
        getData()
    }, [])

    return (
        
        <div>
            <h1>En produktsida</h1>
            <ul>
                {
                    products.map(product => <ProductListItem
                        key={product.id}
                        productData={product}
                    />)
                }
            </ul>
        </div>

    )
}

export default Product