import React from 'react';
import './Card.css';
import CardContent from './CardContent.js';
import CardBanner from './CardBanner.js';
const CardContainer =()=>{
    return (
    <div className="container">
    <CardBanner />
    <CardContent />
    </div>
    );
}
export default CardContainer;