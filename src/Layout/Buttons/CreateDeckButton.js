import { Link } from "react-router-dom";

function CreateDeckButton() {
  return (
    <div>
      <Link to="/decks/new">
        <button>Create Deck</button>
      </Link>
    </div>
  );
};

export default CreateDeckButton;
