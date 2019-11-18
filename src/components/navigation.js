import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Navigation = () => (
    <Grid container spacing={2} alignItems="baseline">
        <Grid item>
            <Link
                to="/"
                style={{
                    color: `black`,
                    textDecoration: `none`,
                }}
            >
                Navigation 1
            </Link>
        </Grid>
        <Grid item>
            <Link
                to="/"
                style={{
                    color: `black`,
                    textDecoration: `none`,
                }}
            >
                Navigation 2
            </Link>
        </Grid>
        <Grid item>
            <Link
                to="/"
                style={{
                    color: `black`,
                    textDecoration: `none`,
                }}
            >
                Navigation 3
            </Link>
        </Grid>
        <Grid item>
            <Button>Make Appointment</Button>
        </Grid>
    </Grid>
)
