import "./Nav.css";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Nav() {
  return (
    <nav>
      <button>
        <a href="">
          <HomeIcon id="homeicon" sx={{ fontSize: 20 }} /> Home
        </a>
      </button>
      <button>
        <a href="">
          <FeedIcon id="homeicon" sx={{ fontSize: 20 }} /> Feed
        </a>
      </button>
      <button>
        <a target="_blank" href="https://react.dev/">
          <CodeIcon id="homeicon" sx={{ fontSize: 20 }} /> React
        </a>
      </button>
      <button>
        <a target="_blank" href="https://mui.com/material-ui/getting-started/">
          <BrushIcon id="homeicon" sx={{ fontSize: 20 }} /> MUI
        </a>
      </button>
      <button>
        <a target="_blank" href="https://github.com/ryansu1130/muiAssist">
          <GitHubIcon id="homeicon" sx={{ fontSize: 20 }} /> GitHub
        </a>
      </button>
    </nav>
  );
}
