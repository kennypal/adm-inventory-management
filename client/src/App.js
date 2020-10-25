import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import AddMed from "./screens/AddMed";
import EditMed from "./screens/EditMed";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id/add">
          <AddMed />
        </Route>
        <Route path="/:device_id/edit/:medication_id">
          <EditMed />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
