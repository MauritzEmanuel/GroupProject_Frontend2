import React, { useEffect, useState} from "react";
import axios from 'axios';
import ProductListItem from "../components/ProductlistItem";
import KartPopup from "../components/KartPopup";
import "../cssFiles/products.css";

const Product = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isKartPopupVisible, setIsKartPopupVisible] = useState(false);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/products?populate=*');
            const formattedProducts = response.data.data.map(item => ({
                id: item.id,
                title: item.attributes.Title,
                author: item.attributes.Author,
                price: item.attributes.Price,
                image: item.attributes.Image?.data.attributes.url
            }));
            setProducts(formattedProducts);
        } catch (error) {
            console.error("Error fetching all products:", error);
        }
    };

    const getCategories = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/categories');
            setCategories(response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getProductsByCategoryName = async (categoryName) => {
        try {
            const category = categories.find(cat => cat.attributes.TimeCenturyInHistory === categoryName);
            if (category) {
                const response = await axios.get(`http://localhost:1337/api/categories/${category.id}?populate[Products][populate]=*`);
                const formattedProducts = response.data.data.attributes.Products.data.map(item => ({
                    id: item.id,
                    title: item.attributes.Title,
                    author: item.attributes.Author,
                    price: item.attributes.Price,
                    image: item.attributes.Image?.data.attributes.url
                }));
                setProducts(formattedProducts);
            }
        } catch (error) {
            console.error(`Error fetching products for category ${categoryName}:`, error);
        }
    };

    useEffect(() => {
        getCategories();
        getAllProducts();
    }, []);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
        setIsKartPopupVisible(true);
    };

    const closeKartPopup = () => {
        setIsKartPopupVisible(false);
    };

    return (
        <div className='sidan'>
            <h1 className="Prod-Header">Time Travelers historieböcker</h1>
            
            <div className="category-buttons">
                <button onClick={getAllProducts}>Alla Böcker</button>

                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => getProductsByCategoryName(category.attributes.TimeCenturyInHistory)}
                    >
                        {category.attributes.TimeCenturyInHistory}
                    </button>
                ))}
            </div>
           
           
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
