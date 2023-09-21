
import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import DrawerAppBar from "./DrawerAppBar";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CustomDrawer from "./CustomDrawer";
import { Box } from "@mui/material";

const Layout = () => {

    return (
        <div style={{ margin: "0px 0px" }}>
            {/* <ResponsiveAppBar /> */}
            {/* <DrawerAppBar /> */}
            <CustomDrawer />
            <div style={{ margin: "20px 150px" }}>
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    );

};

export default Layout;