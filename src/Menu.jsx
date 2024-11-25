import "./Menu.css"
import {useNavigate} from "react-router";

export function Menu() {
    const navigate = useNavigate()


    return (
        <div style={{position: "absolute", top: 0, left: "60px", marginTop: "100px", zIndex: "100"}}>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"/>

                    <span/>
                    <span/>
                    <span/>

                    <ul id="menu">
                        <li onClick={() => navigate("/simplexample")}>Simple example</li>
                        <li onClick={() => navigate("/myth1")}>Myth 1</li>
                        <li onClick={() => navigate("/myth2")}>Myth 2</li>
                        <li onClick={() => navigate("/simplexampletree")}>Simple example tree</li>
                        <li onClick={() => navigate("/propdrill")}>Prop drill</li>
                        <li onClick={() => navigate("/redux")}>Redux</li>
                        <li onClick={() => navigate("/context")}>Context</li>
                        <li onClick={() => navigate("/slowform")}>Slow form</li>
                        <li onClick={() => navigate("/fastform")}>Fast form</li>
                        <li onClick={() => navigate("/slowformmemo")}>Slow form memo</li>
                        <li onClick={() => navigate("/componentsasprops")}>Components as props</li>
                        <li onClick={() => navigate("/backgroundcolourchangeonscroll")}>Background colour change on scroll</li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}