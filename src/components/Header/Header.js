import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="Header-item">
                    <h3>Menu</h3>
                </div>
                <div className="Header-item">
                    <h1>Ritual</h1>
                </div>
                <div className="Header-item">
                    <h4>
                        <span className="hidden-text">Who we are</span>
                        <img className="logo" src="images/checkout.png" alt="checkout logo" />
                    </h4>
                </div>
            </div>
        </div>
    )
}
