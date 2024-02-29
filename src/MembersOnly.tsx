import { Box, Grid } from "@mui/material";

const MembersOnly = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ padding: '10px' }}>
                    Members only page
                </Box>
            </Grid>
        </Grid>
    );
}

export default MembersOnly;