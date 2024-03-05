import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<string>("");

    useEffect(() => {
        async function loadUserInfo() {
            try {
                const response = await fetch('/api/WeatherForecast/info');
                // network error in the 4xx–5xx range
                if (!response.ok) {
                    setUserInfo(`${response.status} ${response.statusText}`);
                } else {
                    setUserInfo(await response.text());
                }
              } catch (error) {
                console.log(error);
              }

        }

        loadUserInfo();

    }, []);
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ padding: '10px' }}>
                    User info
                </Box>
                <Box sx={{ padding: '10px' }}>
                    {userInfo}
                </Box>
            </Grid>
        </Grid>
    );
}

export default UserInfo;