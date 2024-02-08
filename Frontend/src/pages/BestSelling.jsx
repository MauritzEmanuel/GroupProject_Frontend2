import React, { useState, useEffect } from 'react';

const BestSelling = () => {
//     const [bestSellingBooks, setBestSellingBooks] = useState([]);

//     useEffect(() => {
//         fetch('http://your-strapi-url/api/books')
//             .then((response) => response.json())
//             .then((data) => {
//                 // Assuming the data structure has an array under the 'data' key
//                 const bestSellers = data.data.filter(book => book.attributes.BestSeller);
//                 setBestSellingBooks(bestSellers);
//             })
//             .catch((error) => {
//                 console.error('Error fetching best selling books:', error);
//             });
//     }, []);

//     return (
//         <div className='page'>
//             <h1>Best Selling Books</h1>
//             <ul>
//                 {bestSellingBooks.map((book) => (
//                     <li key={book.id}>
//                         <h2>{book.attributes.title}</h2>
//                         {/* Other book details */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
};

export default BestSelling;


