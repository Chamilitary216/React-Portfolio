import React from 'react'
import "./Menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className = {"menu "+ (menuOpen && "active")}>
            <ul>
                {/* onClick will close menu after section is selected */}
                <li onClick = {()=>setMenuOpen(false)}>
                    <a href= "#intro">Home</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                    <a href= "#about">About</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                    <a href= "#portfolio">Portfolio</a>
                </li>
                <li onClick = {()=>setMenuOpen(false)}>
                    <a href= "#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
