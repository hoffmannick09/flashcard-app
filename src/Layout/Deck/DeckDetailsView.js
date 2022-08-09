import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import CardList from "../Cards/CardList";

export function DeckDetailsView({ renderHomePage }) {
  let { deckId } = useParams();
  let history = useHistory();

  const [deck, setDeck] = useState({});
  const { name, description, cards = [] } = deck;
  console.log("CARDS ARRAY", cards);

  const deleteHandler = async () => {
    const result = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (result) {
      await deleteDeck(deckId);
      renderHomePage();
      history.push("/");
    }
  };

  const renderDeckDetailsView = () => {
    readDeck(deckId).then((response) => setDeck(response));
  };

  useEffect(() => {
    readDeck(deckId).then((response) => setDeck(response));
  }, [deckId]);

  return (
    <>
      <div>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{deck.name}</li>
      </ol>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/decks/${deckId}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/decks/${deckId}/study`}>
        <button>Study</button>
        </Link>
        <Link to={`/decks/${deckId}/cards/new`}>
          <button>Add cards</button>
        </Link>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      <div>
        <h1>Cards</h1>
        <CardList cards={cards} renderDeckDetailsView={renderDeckDetailsView} />
      </div>
    </>
  );
}
