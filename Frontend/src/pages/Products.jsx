import { useState, useEffect } from "react";
import axios from "axios";
import ProductListItem from "../components/ProductlistItem";
import KartPopup from "../components/KartPopup";
import "../cssFiles/products.css";
import "../cssFiles/products.css"

const Product = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isKartPopupVisible, setIsKartPopupVisible] = useState(false);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:1337/api/products?populate=*");
            const formattedProducts = response.data.data.map(item => ({
                id: item.id,
                title: item.attributes.Title,
                author: item.attributes.Author,
                price: item.attributes.Price,
                image: item.attributes.Image.data.attributes.url

            }));
            setProducts(formattedProducts);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
        setIsKartPopupVisible(true);
    };

    const closeKartPopup = () => {
        setIsKartPopupVisible(false);
    };

    return (
        <div>
            <h1 className="Prod-Header">Time Travelers historieböcker</h1>
            <ul className="prod-ul">
                {products.map(product => (
                    <ProductListItem
                        key={product.id}
                        productData={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </ul>
            <KartPopup
                isKartPopupVisible={isKartPopupVisible}
                onClose={closeKartPopup}
                cartItems={cartItems}
            />
        </div>
    );
};

export default Product;

