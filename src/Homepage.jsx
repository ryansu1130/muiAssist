import "./Homepage.css";
import Button from "@mui/material/Button";

export default function Homepage() {
  return (
    <>
      <div id="homeContainer">
        <h1 id="hello">Hello</h1>
        <h2>Your Material UI Helper</h2>
        <h2>Has Arrived</h2>
        <h3>
          MUI Assistant Helps You To Build And Customize MUI Component To The
          Way That Fits Your Liking
        </h3>
        <div>
          <Button id="getStartedBtn" variant="contained">
            <a href="#collectionContaienr">Get Started</a>
          </Button>
        </div>
      </div>
    </>
  );
}
