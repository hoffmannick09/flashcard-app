import React from "react";
import CardForm from "./CardForm";
import { readCard, readDeck, updateCard } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function CardEdit() {
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});

  const history = useHistory();

  const { cardId, deckId } = useParams();

  useEffect(() => {
    readCard(cardId).then(
      (response) => {
        setCard(response);
        readDeck(deckId).then((response) => {
          setDeck(response);
        });
      },
      [cardId, deckId]
    );
  });

  const changeHandler = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateCard(card).then(({ deckId }) => history.push(`/decks/${deckId}`));
  };

  return (
    <>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li>Edit Card {cardId}</li>
      </ol>
      <div>
        <form name="edit" onSubmit={submitHandler}>
          <fieldset>
            <h1>Edit Card</h1>
            <CardForm
              changeHandler={changeHandler}
              front={card.front}
              back={card.back}
            />
            <div>
              <Link to={`deck/${deckId}`}>
                <button type="cancel">Cancel</button>
              </Link>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default CardEdit;
