import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createCard } from "../../utils/api";
import CardForm from "./CardForm";
import { useEffect } from "react";
import { readDeck } from "../../utils/api";

function CreateCard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [deck, setDeck] = useState({});

  const { deckId } = useParams();

  useEffect(() => {
    readDeck(deckId).then((response) => {
      setDeck(response);
    });
  }, [deckId]);

  const changeHandler = (event) => {
    if (event.target.name === "front") {
      setFront(event.target.value);
    } else {
      setBack(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createCard(deckId, { front, back }).then(() => {
      setFront("");
      setBack("");
    });
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
        <li>Add Card</li>
      </ol>
      <div>
        <form name="create" onSubmit={submitHandler}>
          <fieldset>
            <h1>React Router: Add Card</h1>
            <CardForm changeHandler={changeHandler} front={front} back={back} />
            <div>
              <Link to={`/decks/${deckId}`}>
                <button type="Done">Done</button>
              </Link>
              <button type="submit">Save</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default CreateCard;
