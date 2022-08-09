import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckButton from "./Buttons/CreateDeckButton";
import DeckList from "./Deck/DeckList";
import CreateDeck from "./Deck/CreateDeck";
import { DeckDetailsView } from "./Deck/DeckDetailsView";
import { listDecks } from "../utils/api";
import CreateCard from "./Cards/CreateCard";
import DeckEdit from "./Deck/DeckEdit";
import CardEdit from "./Cards/CardEdit";
import StudyCards from "./Cards/StudyCards";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((response) => setDecks(response));
  }, []);

  const renderHomePage = () => {
    listDecks().then((response) => setDecks(response));
  };

  return (
    <>
      <Header />
      <div className="container">
        <Switch>

        

          <Route exact path={"/"}>
            <CreateDeckButton />
            <DeckList decks={decks} renderHomePage={renderHomePage} />
          </Route>


          <Route path={"/decks/new"}>
            <CreateDeck />
          </Route>

          <Route path={"/decks/:deckId/cards/new"}>
            <CreateCard />
          </Route>

          <Route path={"/decks/:deckId/study"}>
            <StudyCards />
          </Route>

          <Route path={"/decks/:deckId/cards/:cardId/edit"}>
              <CardEdit />
          </Route>

          <Route path={"/decks/:deckId/edit"}>
            <DeckEdit />
          </Route>

          <Route path={"/decks/:deckId"}>
            <DeckDetailsView renderHomePage={renderHomePage} />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
