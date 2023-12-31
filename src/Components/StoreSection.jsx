import React from 'react';
import chromeStore from '../assets/chrome.svg';
import appleStore from '../assets/apple.svg';

export default function StoreSection() {
    return (
        <>
            <div className="content">
                <div className="stores">
                    <div>
                        <a
                            className="chrome"
                            href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
                        >
                            <img className="store" src={chromeStore} alt="" />
                            <div className="description">
                                <p>available in the</p>
                                <h5>chrome web store</h5>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a
                            className="apple"
                            href="https://apps.apple.com/app/ratepunk/id1607823726"
                        >
                            <img className="store" src={appleStore} alt="" />
                            <div className="description">
                                <p>available in the</p>
                                <h5>chrome web store</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="reviews-content">
                    <div className="apple-reviews">
                        {[...Array(5)].map((_, index) => (
                            <span className="star" key={index}>
                                &#9733;
                            </span>
                        ))}
                        <div className="reviews">Chrome Store reviews</div>
                    </div>
                </div>
            </div>
        </>
    );
}
