import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Collection from "./Collection";

export default function App() {
  return (
    <>
      <Nav />
      <Homepage/>
      <Collection/>
    </>
  );
}
