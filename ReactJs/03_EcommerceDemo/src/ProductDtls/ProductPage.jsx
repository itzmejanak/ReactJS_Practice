import React from 'react';
import './ProductPage.css';
import Nav from '../Navigation/Nav';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
    const location = useLocation();
    const { img, title, star, reviews, prevPrice, newPrice } = location.state || {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        title: "Nike Air Force 1 '07",
        star: "⭐",
        reviews: "42",
        prevPrice: "$130.00",
        newPrice: "$115.00"
    };

    return (
        <>
            <Nav />
            <div className="product-page">
                <div className="breadcrumbs">
                    <a href="/">Clothes and shoes</a> &gt; <a href="/">Shoes</a> &gt; <a href="/">Nike</a>
                </div>
                <div className="product-container">
                    <div className="image-gallery">
                        <img src={img} alt={title} className="main-image" />
                        <div className="thumbnail-images">
                            <img src={img} alt={title} />
                            <img src={img} alt={title} />
                            <img src={img} alt={title} />
                            <img src={img} alt={title} />
                            <img src={img} alt={title} />
                        </div>
                    </div>
                    <div className="product-details">
                        <h1>{title}</h1>
                        <p>Women's Shoes</p>
                        <div className="reviews">
                            {Array(4).fill(<span>⭐</span>)} <span>☆</span>
                            <span>{reviews} reviews</span>
                        </div>
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className="size-selection">
                            <h3>Select Size</h3>
                            <div className="sizes">
                                <button>40.5</button>
                                <button>41</button>
                                <button>42</button>
                                <button>43</button>
                                <button>43.5</button>
                                <button>44</button>
                                <button>44.5</button>
                                <button>45</button>
                            </div>
                            <a href="/" className="size-guide">Size Guide</a>
                        </div>
                        <button className="add-to-cart">Add to cart</button>
                        <div className="delivery-info">
                            <p>Free delivery on orders over $30.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
