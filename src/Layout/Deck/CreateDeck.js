import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function CreateDeck() {
  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const history = useHistory();

  const changeHandler = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createDeck({ name, description }).then(({ id }) => {
      history.push(`/decks/${id}`);
    });
  };

  return (
    <>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Create Deck</li>
      </ol>
      <div>
        <form name="create" onSubmit={submitHandler}>
          <fieldset>
            <h1>Create Deck</h1>
            <DeckForm
              changeHandler={changeHandler}
              name={name}
              description={description}
            />
            <div>
              <Link to="/">
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

export default CreateDeck;
