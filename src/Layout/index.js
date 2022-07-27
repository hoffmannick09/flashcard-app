import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckButton from "../Buttons/CreateDeckButton";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <CreateDeckButton />
          </Route>
        </Switch>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
