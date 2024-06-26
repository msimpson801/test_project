import {Outlet} from "react-router";
import {Menu} from "./Menu";


export default function Home(){

    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}