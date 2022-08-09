import React from "react";
import DeckForm from "./DeckForm";
import { readDeck, updateDeck } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function DeckEdit() {
  const [deck, setDeck] = useState({});

  const history = useHistory();

  const { deckId } = useParams();

  useEffect(() => {
    readDeck(deckId).then((response) => {
      setDeck(response);
    });
  }, [deckId]);

  const changeHandler = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(deck).then(({ id }) => history.push(`/decks/${id}`));
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
    <li>Edit Deck</li>
  </ol>
  <div>
    <form name="edit" onSubmit={submitHandler}>
      <fieldset>
        <h1>Edit Deck</h1>
        <DeckForm
          changeHandler={changeHandler}
          name={deck.name}
          description={deck.description}
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

export default DeckEdit;
