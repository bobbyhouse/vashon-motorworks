import React from "react"
import { Link } from "gatsby"

import classNames from "classnames";

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => {
  return {
      button: {
          backgroundColor: 'black',
          margin: theme.spacing(1),
          '&:hover': {
              backgroundColor: 'black',
          },
      },
  };
});

function IndexPage() {
    const classes = useStyles();

    return (
        <Layout>
          <SEO title="Home" />
          <Hero />
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
          >
              <Grid item>
                  <a href="https://app.acuityscheduling.com/schedule.php?owner=18602916" target="_blank" className={classNames(classes.button, "acuity-embed-button")}>Make Appointment</a><script src="https://embed.acuityscheduling.com/embed/bar/18602916.js" async></script>
              </Grid>
          </Grid>
        </Layout>
    );
}

export default IndexPage
