import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

type UserInfo = {
    identityProvider: string,
    userId: string,
    userDetails: string,
    userRoles: string[],
    claims: {
        typ: string,
        val: string
    }[]
}

const TopBar = () => {
    const [userInfo, setUserInfo] = useState<UserInfo|null>(null);


    useEffect(() => {
        async function loadAuthInfo() {
            const response = await fetch("/.auth/me");
            const payload = await response.json();
            const { clientPrincipal } = payload as { clientPrincipal: UserInfo };

            setUserInfo(clientPrincipal);
        }

        loadAuthInfo();
    }, []);


    return (
        <Grid container sx={{ backgroundColor: '#007FFF', color: '#FFFFFF' }}>
            <Grid item xs={8}>Top bar</Grid>
            {userInfo && <>
                <Grid item xs={2}>{userInfo.userDetails}</Grid>
                <Grid item xs={2}><a href="logout">Logout</a></Grid>
            </>}
            {!userInfo && <Grid item xs={4}><a href="login">Login</a></Grid>}
        </Grid>
    )
}

export default TopBar;