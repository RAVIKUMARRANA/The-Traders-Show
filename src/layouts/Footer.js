import { Grid, Typography,Box } from "@mui/material"

const Footer =()=>{
    return(
        <Box sx={{ flexGrow: 1 , bgcolor:'grey',margin:'50px 0px'}}>

            <Grid container spacing={4} >
                <Grid item xs={3}>
                    <Typography textAlign="center"><h5>Company Description</h5></Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography textAlign="center"><h5>Products</h5> </Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography textAlign="center"><h5>Usefull Links</h5></Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography textAlign="center"><h5>Contact</h5></Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;

