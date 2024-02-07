import "./Collection.css";
const initCollection = [
  {
    name: "Button",
    soruce:
      "https://mui.com/static/material-ui/react-components/button-light.png",
  },
  {
    name: "Auto Complete",
    soruce:
      "https://mui.com/static/material-ui/react-components/autocomplete-light.png",
  },
  {
    name: "Button Group",
    soruce:
      "https://mui.com/static/material-ui/react-components/button-group-light.png",
  },
  {
    name: "Checkbox",
    soruce:
      "https://mui.com/static/material-ui/react-components/checkbox-light.png",
  },
  {
    name: "Rating",
    soruce:
      "https://mui.com/static/material-ui/react-components/rating-light.png",
  },
  {
    name: "Select",
    soruce:
      "https://mui.com/static/material-ui/react-components/select-light.png",
  },
  {
    name: "Slider",
    soruce:
      "https://mui.com/static/material-ui/react-components/slider-light.png",
  },
  {
    name: "Text Field",
    soruce:
      "	https://mui.com/static/material-ui/react-components/text-field-light.png",
  },
  {
    name: "Badge",
    soruce:
      "https://mui.com/static/material-ui/react-components/badge-light.png",
  },
  {
    name: "Switch",
    soruce:
      "https://mui.com/static/material-ui/react-components/switch-light.png",
  },
  {
    name: "Toggle",
    soruce:
      "https://mui.com/static/material-ui/react-components/toggle-button-light.png",
  },
  {
    name: "Chip",
    soruce:
      "https://mui.com/static/material-ui/react-components/chip-light.png",
  },
  {
    name: "Tooltip",
    soruce:
      "https://mui.com/static/material-ui/react-components/tooltip-light.png",
  },
  {
    name: "Alert",
    soruce:
      "https://mui.com/static/material-ui/react-components/alert-light.png",
  },
  {
    name: "Snackbar",
    soruce:
      "https://mui.com/static/material-ui/react-components/snackbar-light.png",
  },
  {
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
            <div>
              <p>{value.name}</p>
              <img src={value.soruce} />
            </div>
          );
        })}
      </div>
    </>
  );
}
