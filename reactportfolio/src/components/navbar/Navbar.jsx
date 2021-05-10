import "./Navbar.scss";
import {Person, Mail } from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className = {"navbar " + (menuOpen && "active")}>
            <div className = "wrapper">
                <div className = "left">
                    <a href = "#intro" className ="logo">Chris Curry Codez</a>
                    <div className="itemContainer">
                        <Person className ="icon" />
                        <span>216-224-3019</span>

                    </div>
                    <div className ="itemContainer>">
                        <Mail className ="icon" />
                        <span>ChrisCurryCodez@gmail.com</span>
                    </div>
                </div>
                <div className = "right">
                    <div className="stacks" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}