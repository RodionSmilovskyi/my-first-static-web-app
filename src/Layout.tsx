import { Grid } from "@mui/material"
import { PropsWithChildren } from "react"
import TopBar from "./TopBar";

const Layout = (props: PropsWithChildren<{ }>) => {

    return <Grid container direction='column' wrap='nowrap' sx={{ height: '100vh', maxHeight: '100vh', maxWidth: '100vw', width: '100vw', overflow: 'hidden' }}>
        <Grid item sx={{ flex: '0 1 auto', zIndex: "1" }}>
            <TopBar />
        </Grid>
        <Grid item sx={{ flex: '1 1 auto', minHeight: 0, overflowY: "auto", overflowX: "hidden" }}>
            {props.children}
        </Grid>
    </Grid>
}

export default Layout;
