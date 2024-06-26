import "./Menu.css"

export function Menu() {

    return (
        <div style={{position: "absolute", top: 0, left: "60px", marginTop: "100px"}}>
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Info</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </nav>
        </div>
    )

}