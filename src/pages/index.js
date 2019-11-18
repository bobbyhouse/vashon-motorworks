import React from "react"
import { Link } from "gatsby"

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
      backgroundColor: 'black',
      margin: theme.spacing(1),
      '&:hover': {
          backgroundColor: 'black',
      },
  },
}));


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
                  <Button variant="contained" color="primary" className={classes.button}>Make Appointment</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>Dispatch Now</Button>
              </Grid>
          </Grid>
        </Layout>
    );
}

export default IndexPage
