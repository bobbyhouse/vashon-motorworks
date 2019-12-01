import React from 'react';
import classNames from 'classnames';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '250px',
    },

    item: {
        padding: '20px',
        textAlign: 'center',
    },

    mainText: {
        fontFamily: 'Pacifico',
        fontSize: '1.55rem',
        fontWeight: '200',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3rem',
        },
    },

    subText: {
        fontFamily: 'Work Sans',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginBottom: '.25rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.5rem',
        },
    },

    captionText: {
        fontFamily: 'Work Sans',
        fontSize: '.6rem',
        fontWeight: 'bold',
        marginBottom: '.15rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '.6rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '.6rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '.6rem',
        },
    },

    separator: {
        display: 'inline-block',
        width: '4px',
        height: '4px',
        borderRadius: '4px',
        backgroundColor: 'black',
        verticalAlign: 'middle',
    },

    textContainer: {
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'center',
        minWidth: '20rem',
        maxWidth: '20rem',
        borderRadius: '2px',
        [theme.breakpoints.up('sm')]: {
            minWidth: '30rem',
            maxWidth: '30rem',
        },
        [theme.breakpoints.up('md')]: {
            minWidth: '40rem',
            maxWidth: '40rem',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '40rem',
            maxWidth: '40rem',
        },
    },

    captionContainer: {
        textAlign: 'center',
        marginTop: '1.5rem',
    }
}));

export function Hero(props) {
    const classes = useStyles();
    return (
            <Grid
                className={classNames(classes.root)}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item className={classes.item}>
                    <Hidden smDown>
                        <h1 className={classes.mainText}>Vashon <br /> Motorworks</h1>
                    </Hidden>
                    <h2 className={classes.subText}>24/7 x On-Site x Auto x Marine</h2>
                    <div className={classes.captionContainer}>
                        <p className={classes.captionText}>Idependently Owned and Operated</p>
                        <p className={classes.captionText}>Vashon Island, WA</p>
                        <p className={classes.captionText}>est. 2018</p>
                    </div>
                </Grid>
            </Grid>
    );
}

export default Hero;
