import React from "react";
import List from "./List";
import Form from "./Form";
import Header from "../headers/header";

const App = () => (
  <div>
    <div>
      <Header />
    </div>
    <div className = 'form'>
      <h2>Shopping Item</h2>
      <Form />
    </div>
    <div className ='list'>
      <h2>Add a new Item</h2>
      <List />
    </div>
  </div>
);

export default App;