import { Outlet } from "react-router-dom";
import Nav from "../Header/Nav";



const Root = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Root;