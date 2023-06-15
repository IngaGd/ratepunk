import React from 'react';
import '../style/components/storeSection.scss';

import chromeStore from '../assets/chrome.svg';
import appleStore from '../assets/apple.svg';

export default function StoreSection() {
    return (
        <>
            <div className="chrome">
                <img className="store" src={chromeStore} alt="" />
                <div className="description">
                    <p>available in the</p>
                    <h5>chrome web store</h5>
                </div>
            </div>
            <div className="apple">
                <img className="store" src={appleStore} alt="" />

                <div className="description">
                    <p>available in the</p>
                    <h5>chrome web store</h5>
                </div>
            </div>
            <div className="apple-reviews">
                {[...Array(5)].map((_, index) => (
                    <span className="star" key={index}>
                        &#9733;
                    </span>
                ))}
                <div className="reviews">Chrome Store reviews</div>
            </div>
        </>
    );
}
