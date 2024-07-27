import LineWithHeader from "./Line";
import React from "react";
import './Card.css';

export default function Card({ header, body, maxWidth, lineWidth = "100%" }) {
    return (
        <div className="card-comp" style={{ maxWidth: maxWidth }}>
            <LineWithHeader header={header} fontSize="1.5rem" width={lineWidth} />
            {body}
        </div>
    )
}