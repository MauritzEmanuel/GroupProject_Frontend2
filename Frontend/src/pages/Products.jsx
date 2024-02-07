import { useState, useEffect } from "react";
import axios from "axios"
import ProductListItem from "../components/ProductlistItem";
import "../cssFiles/products.css"


const Product = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {

        const data = await axios.get(`http://localhost:1337/api/products?populate=*`)

        const productArr = []

        data.data.data.forEach(item => {

            productArr.push({
                id: item.id,
                title: item.attributes.Title,
                author: item.attributes.Author,
                price: item.attributes.Price,
                image: item.attributes.Image.data.attributes.url
            })
        })

        setProducts(productArr)
    }


    useEffect(() => {
        getData()
    }, [])

    return (

        <div className='sidan'>
            <div className="Prod-Header">
                <h1>Time Travelers historieböcker</h1>
                <div className='knappar'>
                    <button>1700-talet</button>
                    <button>1800-talet</button>
                    <button>1900-talet</button>
                </div>
            </div>

            <ul className="prod-ul">
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