import React from 'react';
import classNames from 'classnames';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    pattern: {
        backgroundColor: '#FAFAFA',
        //        backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)',
        backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)',

        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 30px 30px',
        position: 'relative',
    },

    root: {
        minHeight: '250px',
    },

    item: {
        padding: '20px',
    },

    mainText: {
        fontFamily: 'Work Sans',
        fontSize: '1.55rem',
        fontWeight: 'bolder',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.8rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.8rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.8rem',
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
        marginTop: '1.5rem',
    }
}));

export function Hero(props) {
    const classes = useStyles();
    return (
            <Grid
                className={classNames(classes.root, classes.pattern)}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item className={classes.item}>
                        <Paper className={classes.textContainer}>
                            <h1 className={classes.mainText}>Full Service Mechanic</h1>
                            <h2 className={classes.subText}>24/7 <div className={classes.separator} /> On-Site</h2>
                            <h2 className={classes.subText}>Auto <div className={classes.separator} /> Marine</h2>
                            <div className={classes.captionContainer}>
                                <p className={classes.captionText}>Idependently Owned and Operated</p>
                                <p className={classes.captionText}>Vashon Island, WA</p>
                                <p className={classes.captionText}>est. 2018</p>
                            </div>
                        </Paper>
                </Grid>
            </Grid>
    );
}

export default Hero;
