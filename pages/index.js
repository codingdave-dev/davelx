import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  // ADD STYLS HERE
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <Grid container justify={'center'} style={{marginTop: '10em'}}>
      <Grid item>
        <Typography variant={'h1'} align={'center'}>This is a holding page for davelx.co.uk</Typography>
      </Grid>
    </Grid>
  );
};

export default Index;
