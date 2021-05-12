import "./Navbar.scss";
import { Person, Mail, GitHub, LinkedIn, GetApp } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Chris Curry Codez
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>216-224-3019</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:ChrisCurryCodez@gmail.com"><span>ChrisCurryCodez@gmail.com</span></a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/Chamilitary216"><span>Github</span></a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/chris-curry-01a982200/"><span>LinkedIn</span></a>
          </div>
          <div className="itemContainer">
            <GetApp className="icon" />
            <a href="images/Resume.docx"><span>Resume</span></a>
          </div>
        </div>
        <div className="right">
          <div className="stacks" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}