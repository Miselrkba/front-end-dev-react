import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Button } from 'reactstrap'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion </NavbarBrand>
        </div>
      </Navbar>
      <Button>lala</Button>
    </div>
  );
}

export default App;
