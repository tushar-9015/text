import React from "react"


export default function NavBar(prop) {
    return (
        <nav className="navigation-container">
            <ul className="navigation">
                <li><a href="/" className="nav-brand">
                {prop.title}
                </a>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <button className="btn-mode" onClick={() => prop.toggleDarkMode()}>Theme</button>
            </ul>
        </nav>
    )

}

