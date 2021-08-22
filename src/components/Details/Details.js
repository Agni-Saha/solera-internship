import React from 'react'
import "./Details.css"

export default function Details() {
    return (
        <div className="Details">
            <div className="details-heading">
                <h1>Daily essentials with good intentions — for living life or creating it.</h1>
            </div>
            <div className="details-container">
                <div className="details-content">
                    <div className="details-icon">
                        <i className="fas fa-arrow-alt-circle-right"></i>
                        <h3>
                            Traceable Ingredients
                        </h3>
                    </div>
                </div>
                <div className="details-content">
                    <div className="details-icon">
                        <i className="fas fa-ban"></i>
                        <h3>
                            Non-GMO
                        </h3>
                    </div>
                </div>
                <div className="details-content">
                    <div className="details-icon">
                        <i className="fas fa-shield-alt"></i>
                        <h3>
                            Third Party Tested
                        </h3>
                    </div>
                </div>
                <div className="details-content">
                    <div className="details-icon">
                        <i className="fas fa-seedling"></i>
                        <h3>
                            Vegan
                        </h3>
                    </div>
                </div>
                <div className="details-content">
                    <div className="details-icon">
                        <i className="fas fa-tint"></i>
                        <h3>
                            No Artificial  Flavors or  Synthetic Fillers
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
