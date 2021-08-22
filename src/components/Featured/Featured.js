import React from 'react'
import "./Featured.css"

export default function Featured() {
    return (
        <section className="Featured">

            <div className="featured-container">
                <div className="featured-image">
                    <img src="images/home-feat-dyson.jpg" alt="" />
                </div>
                <div className="featured-details">
                    <h1>
                        We're not about pseudoscience and half-truths
                    </h1>
                    <p>
                        From Omega-3 DHA from microalgae to regeneratively-farmed
                        pea protein, our scientists studied diets and genetics to
                        make daily essentials based on what we need.
                    </p>
                    <ul>
                        <li>
                            <a href="#multivitamin">
                                Multivitamin for Women 18+
                            </a>
                        </li>
                        <li>
                            <a href="#multivitamin">
                                The Prenatal Multivitamin
                            </a>
                        </li>
                        <li>
                            <a href="#multivitamin">
                                Multivitamin for Men 18+
                            </a>
                        </li>
                        <li>
                            <a href="#multivitamin">
                                Essential Protein Daily Shake 18+
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="featured-container">
                <div className="featured-image order-2">
                    <img src="images/Home-Map.jpg" alt="" />
                </div>
                <div className="featured-details order-1">
                    <h1>
                        You deserve traceability
                    </h1>
                    <p>
                        We share our sources, studies, and suppliers — daily
                        essentials backed by the first visible supply chain
                        of its kind.
                    </p>
                    <ul>
                        <li>
                            <a href="#multivitamin">
                                Who We Are
                            </a>
                        </li>
                        <li>
                            <a href="#multivitamin">
                                Meet Our Ingredients
                            </a>
                        </li>
                        <li>
                            <a href="#multivitamin">
                                Our Clinical Study
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="featured-container">
                <div className="featured-image">
                    <img src="images/Home-Feat-03.jpg" alt="" />
                </div>
                <div className="featured-details">
                    <h1>
                        Clean and simple, delivered
                    </h1>
                    <p>
                        Easy-to-start. Easy-to-cancel. Our team of scientists
                        and nutritional experts are on a mission to turn your
                        new healthy habit into a Ritual.*
                    </p>
                    <ul>
                        <li className="last-text">
                            <i className="far fa-arrow-alt-circle-up"></i>
                            Free shipping
                        </li>
                        <li className="last-text">
                            <i className="fas fa-history"></i>
                            Free shipping
                        </li>
                        <li className="last-text">
                            <i className="far fa-times-circle"></i>
                            Free and easy cancellation
                        </li>
                        <li className="last-text">
                            <i className="far fa-star"></i>
                            30-day money back guarantee
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}
