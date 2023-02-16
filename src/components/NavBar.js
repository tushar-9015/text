


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
            </ul>
        </nav>
    )

}

