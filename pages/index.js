import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import ProfileHeader from "../src/ui/ProfileHeader";

const useStyles = makeStyles((theme) => ({
  // ADD STYLS HERE
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <Grid container>
      <Grid item><Typography variant={'h1'}>This is the starter page</Typography></Grid>
    </Grid>
  );
};

export default Index;
