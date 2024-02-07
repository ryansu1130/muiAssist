import { useState } from "react";
import "./App.css";
import { v4 as uid } from "uuid";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Collection from "./Collection";
import Component from "./Component";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

export default function App() {
  const initData = [
    {
      id: uid(),
      pre: (
        <Button id="component" variant="contained" color="success">
          {" "}
          Click Me{" "}
        </Button>
      ),
      name: "Button",
      style: { prop1: 'variant="contained"', prop2: 'color="success"' },
      secltion: [
        { type: "variant", label: ["outlined", "contained"] },
        { type: "color", label: ["error", "success"] },
      ],
    },
    {
      id: uid(),
      pre: <Slider id="component" defaultValue={30} />,
      name: "Slider",
      style: { prop1: 'defaultValue="30"' },
      secltion: [{ type: "defaultValue", label: ["10", "50", "100"] }],
    },
    {
      id: uid(),
      pre: <Checkbox id="component" defaultChecked />,
      name: "Checkbox",
      style: { prop1: "defaultChecked" },
      secltion: [{ type: "defaultChecked", label: ["Checked", "Uncheck"] }],
    },
    {
      id: uid(),
      pre: (
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      ),
      name: "ButtonGroup",
      style: { prop1: 'variant="outlined"', prop2: 'color="error"' },
      secltion: [
        { type: "variant", label: ["outlined", "contained"] },
        { type: "color", label: ["error", "success"] },
      ],
    },
    {
      id: uid(),
      pre: <Alert severity="info">This is an info Alert.</Alert>,
      name: "Alert",
      style: { prop1: 'severity="info"' },
      secltion: [
        { type: "severity", label: ["info", "success", "error", "warning"] },
      ],
    },
    {
      id: uid(),
      pre: <TextField label="Outlined" variant="outlined" />,
      name: "TextField",
      style: { prop1: 'label="Outlined"', prop2: 'variant="outlined"' },
      secltion: [
        { type: "label", label: ["Outlined", "contained"] },
        { type: "variant", label: ["Outlined", "contained"] },
        { type: "color", label: ["success", "error"] },
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
