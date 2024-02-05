import "./Homepage.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Homepage() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <h2>Your Material UI Helper</h2>
        <h2>Is Here</h2>
        <h3>
          Customize MUI To The Way That Fits Your Liking Customize MUI To The
          Way That Fits Your Liking Customize MUI To The Way That Fits Your
          Liking Customize MUI To The Way That Fits Your Liking
        </h3>
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </>
  );
}
