// import { useState, useEffect } from "react";
// import axios from "axios"
// import ProductListItems from '../components/ProductlistItem'

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"


const Product = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')

    const getData = async () => {

        const data = await axios.get(`http://localhost:1337/api/products/${id}`)

        console.log(data.data.data.attributes.Title);
        setTitle(data.data.data.attributes.Title)
    }

    
    useEffect(() => {
        getData()
    }, [])

    return (
        
        <div>
            <h1>En produktsida</h1>
            <h2>{title}</h2>
        </div>

)
}

export default Product

// const Product = () => {

//     const [products, setProducts] = useState([])

//     const getData = async () => {
//         try {
//             const response = await axios.get(`http://localhost:1337/api/products/`)
//             setProducts(response.data)
//         }
//         catch (error) {
//             console.error('Error fetching data: ', error)
//         }
//     }

    
//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <>
//             <div>
//                 <h1>Våra böcker</h1>

//                 <ul>
//                     {Array.isArray(products) && products.map((product) => (
//                         <ProductListItems key={product.id} product={product}/>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Product