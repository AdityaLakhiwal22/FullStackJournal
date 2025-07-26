import Sidebar from "../component/sidebar"
import {Outlet} from "react-router-dom";
import "./layout.css"
const Layout = () => {
    return (
        <div className="container">
            <Sidebar/>
            <div className="content">
                <div></div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout;