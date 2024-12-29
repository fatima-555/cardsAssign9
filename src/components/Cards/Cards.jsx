import React from "react";
import Styles from "./Cards.module.css";


const Cards = ({id, title, price, image, description, category, rating}) => {
    return (
    <>
        <div className={Styles.card}>
        <img className={Styles.img} src={image} alt="" />
        <h3 className={Styles.id}>{id}</h3>
        <h4 className={Styles.rating}> {rating} ⭐</h4>
        <h4 className={Styles.price}>$ {price}</h4>
        <h4 className={Styles.category}> {category}</h4>
        <h4 className={Styles.title}> {title}</h4>
        <h4 className={Styles.description}> {description}</h4>
        </div>
    </>
    )
}
export default Cards;