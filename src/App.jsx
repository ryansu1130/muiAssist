import { useState } from "react";
import "./App.css";
import { v4 as uid } from "uuid";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Collection from "./Collection";
import Component from "./Component";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

export default function App() {
  const initData = [
    {
      id: uid(),
      pre: (
        <Button id="component" variant="outlined" color="error">
          {" "}
          Click Me{" "}
        </Button>
      ),
      name: "Button",
      style: { prop1: 'variant="outlined"', prop2: 'color="error"' },
      secltion: [
        { type: "variant", label: ["outlined", "contained"] },
        { type: "color", label: ["error", "success"] },
      ],
    },
    {
      id: uid(),
      pre: <Rating id="component" defaultValue={2.5} precision={0.5} />,
      name: "Rating",
      style: { prop1: 'defaultValue="2.5"', prop2: 'precision="0.5"' },
      secltion: [
        { type: "defaultValue", label: ["1", "2", "3", "4", "5"] },
        { type: "precision", label: ["0.5", "1"] },
        { type: "defaultValue", label: ["1", "2", "3", "4", "5"] },
        { type: "defaultValue", label: ["1", "2", "3", "4", "5"] },
      ],
    },
    {
      id: uid(),
      pre: (
        <Button id="component" variant="outlined" color="error">
          {" "}
          Click Me{" "}
        </Button>
      ),
      name: "Button",
      style: { prop1: 'variant="outlined"', prop2: 'color="error"' },
      secltion: [
        { type: "variant", label: ["outlined", "contained"] },
        { type: "color", label: ["error", "success"] },
      ],
    },
    {
      id: uid(),
      pre: <Rating id="component" defaultValue={2.5} precision={0.5} />,
      name: "Rating",
      style: { prop1: 'defaultValue="2.5"', prop2: 'precision="0.5"' },
      secltion: [
        { type: "defaultValue", label: ["1", "2", "3", "4", "5"] },
        { type: "precision", label: ["0.5", "1"] },
        { type: "defaultValue", label: ["1", "2", "3", "4", "5"] },
        { type: "defaultValue", label: ["1", "2", "3", "4", "5"] },
      ],
    },
    
  ];
  const [array, setArray] = useState(initData);

  return (
    <>
      <Nav />
      <Homepage />
      <Collection />
      {array.map((value, idx) => {
        return <Component key={value.id} array={value} />;
      })}
    </>
  );
}
