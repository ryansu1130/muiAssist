import "./Collection.css";
import { v4 as uid } from "uuid";
const initCollection = [
  {
    id: uid(),
    name: "Button",
    soruce:
      "https://mui.com/static/material-ui/react-components/button-light.png",
  },
  {
    id: uid(),
    name: "Auto Complete",
    soruce:
      "https://mui.com/static/material-ui/react-components/autocomplete-light.png",
  },
  {
    id: uid(),
    name: "Button Group",
    soruce:
      "https://mui.com/static/material-ui/react-components/button-group-light.png",
  },
  {
    id: uid(),
    name: "Checkbox",
    soruce:
      "https://mui.com/static/material-ui/react-components/checkbox-light.png",
  },
  {
    id: uid(),
    name: "Rating",
    soruce:
      "https://mui.com/static/material-ui/react-components/rating-light.png",
  },
  {
    id: uid(),
    name: "Select",
    soruce:
      "https://mui.com/static/material-ui/react-components/select-light.png",
  },
  {
    id: uid(),
    name: "Slider",
    soruce:
      "https://mui.com/static/material-ui/react-components/slider-light.png",
  },
  {
    id: uid(),
    name: "Text Field",
    soruce:
      "	https://mui.com/static/material-ui/react-components/text-field-light.png",
  },
  {
    id: uid(),
    name: "Badge",
    soruce:
      "https://mui.com/static/material-ui/react-components/badge-light.png",
  },
  {
    id: uid(),
    name: "Switch",
    soruce:
      "https://mui.com/static/material-ui/react-components/switch-light.png",
  },
  {
    id: uid(),
    name: "Toggle",
    soruce:
      "https://mui.com/static/material-ui/react-components/toggle-button-light.png",
  },
  {
    id: uid(),
    name: "Chip",
    soruce:
      "https://mui.com/static/material-ui/react-components/chip-light.png",
  },
  {
    id: uid(),
    name: "Tooltip",
    soruce:
      "https://mui.com/static/material-ui/react-components/tooltip-light.png",
  },
  {
    id: uid(),
    name: "Alert",
    soruce:
      "https://mui.com/static/material-ui/react-components/alert-light.png",
  },
  {
    id: uid(),
    name: "Snackbar",
    soruce:
      "https://mui.com/static/material-ui/react-components/snackbar-light.png",
  },
  {
    id: uid(),
    name: "Link",
    soruce:
      "https://mui.com/static/material-ui/react-components/link-light.png",
  },
];

export default function Collection() {
  return (
    <>
      <hr style={{ marginTop: "5vw" }} />
      <div id="collectionContaienr">
        {initCollection.map((value, idx) => {
          return (
            <div key={value.id}>
              <p>{value.name}</p>
              <img src={value.soruce} />
            </div>
          );
        })}
      </div>
    </>
  );
}
