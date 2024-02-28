import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

type WeatherData = {
    date: string,
    summary: string,
    temperatureC: number
}

const Home = () => {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

    useEffect(() => {
        async function loadForecast() {
            const response = await fetch("/api/WeatherForecast");
            const data = await response.json() as WeatherData[];

            setWeatherData(data);
        }

        loadForecast();

    }, []);

    return (
        <Grid container>
            <Grid xs={12}>
                <Box sx={{ padding: '10px' }}>
                    Weather forecast from Azure service API
                </Box>
            </Grid>
            {weatherData?.map(wd => (
                <Grid xs={12}>{`${wd.date} ${wd.temperatureC} ${wd.summary}`}</Grid>
            ))}
        </Grid>
    )
}

export default Home;