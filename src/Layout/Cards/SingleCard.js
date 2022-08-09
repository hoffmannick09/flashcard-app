import React from "react";
import { deleteCard } from "../../utils/api";
import { Link } from "react-router-dom";


function SingleCard({ card: { id, front, back, deckId }, renderDeckDetailsView }) {

    const deleteHandler = async() => {

        const result = window.confirm(
            "Delete this card? You will not be able to recover it."
        );
        if (result) {
            await deleteCard(id);
           renderDeckDetailsView()
        };
    };

  return (
    <div>
      <p>{front}</p>
      <p>{back}</p>
      <Link to={`/decks/${deckId}/cards/${id}/edit`}>
      <button>Edit</button>
      </Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default SingleCard