import React from "react";
import SingleDeck from "./SingleDeck";

function DeckList({ decks, renderHomePage }) {
  const deckList = decks.map((deck, index) => (
    <SingleDeck deck={deck} key={index} renderHomePage={renderHomePage}/>
  ));

  return <>{deckList}</>;
}

export default DeckList;
