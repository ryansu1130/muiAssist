import "./Homepage.css";
import Button from "@mui/material/Button";

export default function Homepage() {
  return (
    <>
      <div id="homeContainer">
        <h1 id="hello">Hello</h1>
        <h2>Your Material UI Helper</h2>
        <h2>Is Here</h2>
        <h3>
          Customize MUI To The Way That Fits Your Liking Customize MUI To The
          Way That Fits Your Liking Customize MUI To The Way That Fits Your
          Liking Customize MUI To The Way That Fits Your Liking
        </h3>
        <div>
          <Button id="getStartedBtn" variant="contained">Get Started</Button>
        </div>
      </div>
    </>
  );
}
