import React from "react";
import SingleCard from "./SingleCard";

function CardList({ cards, renderDeckDetailsView }) {
    const cardList = cards.map((card, index) => (
      <SingleCard card={card} key={index}  renderDeckDetailsView={renderDeckDetailsView}/>
    ));
  
    return <>{cardList}</>;
  }
  
  export default CardList;