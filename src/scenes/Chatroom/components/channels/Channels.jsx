import React from 'react'
import './channels.css';

export default function Channels() {
    return (
        <div className="channels-sidebar">
            <h5>Channels </h5>
            <hr />
            <ul className="list-unstyled">
                <li>#general</li>
                <li>#issues</li>
                <li>#candidates</li>
            </ul>
        </div>
    )
}