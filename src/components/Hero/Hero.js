import React from 'react'
import "./Hero.css"

export default function Hero() {
    return (
        <section className="Hero">
            <div className="hero-container">
                <h1 className="first-line">The future</h1>
                <h1 className="second-line">of health</h1>
                <h1 className="third-line"><span>&#8212;</span> is clear</h1>
                <button className="hero-button">Shop All</button>
            </div>
        </section>
    )
}
