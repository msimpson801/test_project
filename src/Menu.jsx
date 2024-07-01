import "./Menu.css"
import {useNavigate} from "react-router";

export function Menu() {
    const navigate = useNavigate()


    return (
        <div style={{position: "absolute", top: 0, left: "60px", marginTop: "100px"}}>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"/>

                    <span/>
                    <span/>
                    <span/>

                    <ul id="menu">
                        <li onClick={() => navigate("/simplexample")}>Simple example</li>
                        <li onClick={() => navigate("/simplexamplenoprops")}>Simple example no props</li>
                        <li onClick={() => navigate("/simplexampletree")}>Simple example tree</li>
                        <li onClick={() => navigate("/propdrill")}>Prop drill</li>
                        <li onClick={() => navigate("/redux")}>Redux</li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}