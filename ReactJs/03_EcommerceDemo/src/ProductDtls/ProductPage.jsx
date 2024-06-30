import React from 'react';
import './ProductPage.css';
import Nav from '../Navigation/Nav';

const ProductPage = () => {
    return (
        <>
            <Nav />
            <div className="product-page">
                <div className="breadcrumbs">
                    <a href="/">Clothes and shoes</a> &gt; <a href="/">Shoes</a> &gt; <a href="/">Nike</a>
                </div>
                <div className="product-container">
                    <div className="image-gallery">
                        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Force 1" className="main-image"/>
                        <div className="thumbnail-images">
                            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Force 1" />
                            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Force 1" />
                            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Force 1" />
                            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Force 1" />
                            <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike Air Force 1" />
                        </div>
                    </div>
                    <div className="product-details">
                        <h1>Nike Air Force 1 '07</h1>
                        <p>Women's Shoes</p>
                        <div className="reviews">
                            <span>⭐⭐⭐⭐☆</span>
                            <span>42 reviews</span>
                        </div>
                        <div className="price">$115.00</div>
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
