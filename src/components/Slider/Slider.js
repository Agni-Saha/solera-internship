import React from 'react'
import "./Slider.css"

export default function Slider() {
    return (
        <div className="Slider">
            <div className="slider-container">
                <div className="slider-content">
                    <div className="image-container">
                        <img src="images/Category-Multivitamin.jpg" alt="" />
                    </div>
                    <h2>Shop Multivitamin</h2>
                </div>

                <div className="slider-content">
                    <div className="image-container">
                        <img src="images/Category-Protein__1_.jpg" alt="" />
                    </div>
                    <h2>Shop Protein</h2>
                </div>

                <div className="slider-content">
                    <div className="image-container">
                        <img src="images/Category-Pregnancy__1_.jpg" alt="" />
                    </div>
                    <h2>Shop Pregnancy</h2>
                </div>
                <div className="slider-content">
                    <div className="image-container">
                        <img src="images/Category-Bundles.jpg" alt="" />
                    </div>
                    <h2>Shop Bundles</h2>
                </div>
            </div>
        </div>
    )
}
