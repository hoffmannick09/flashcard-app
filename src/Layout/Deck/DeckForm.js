import React from "react";

function DeckForm({ changeHandler, name, description }) {
  return (
    <>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required={true}
          onChange={changeHandler}
          value={name || "" }
          placeholder="Deck name"
        ></input>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          required={true}
          onChange={changeHandler}
          value={description || "" }
          placeholder="Brief description of the deck"
        ></textarea>
      </div>
    </>
  );
}

export default DeckForm;
