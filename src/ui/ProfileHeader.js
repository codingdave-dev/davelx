import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    borderRadius: "100%",
    width: 250,
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
    [theme.breakpoints.down("sm")]: {
      width: 175,
    },
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  subText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  socialIcon: {
    color: theme.palette.primary.main,
    fontSize: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
}));

const ProfileHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction={matchesSM ? "column" : "row"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item>
        {" "}
        <img
          className={classes.profileImage}
          src="/assets/avatar/dave_profile_photo.jpeg"
          alt="Daves Profile Photo"
        />
      </Grid>
      <Grid
        item
        style={matchesSM ? { marginLeft: null } : { marginLeft: "4em" }}
      >
        <Grid
          item
          container
          direction={"column"}
          alignItems={matchesSM ? "center" : null}
        >
          <Grid item>
            <Typography variant={"h1"} className={classes.titleText}>
              Dave Evans
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h3"} className={classes.subText}>
              Website/App Design & Development
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "1em" }}>
            <Grid item container spacing={2}>
              <Grid item>
                <GitHubIcon className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <FacebookIcon className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <TwitterIcon className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <InstagramIcon className={classes.socialIcon} />
              </Grid>
              <Grid item>
                <LinkedInIcon className={classes.socialIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
