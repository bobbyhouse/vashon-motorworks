//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Logo from './logo';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import classNames from 'classnames';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        color: 'black',
        backgroundColor: 'white',
        display: 'flex',
    },
    drawer: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: 'none',
        color: 'black',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerRoot: {
        marginTop: '10px',
        textAlign: 'center',
    },

    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    logo: {
        fontSize: '3em',
        fontFamily: 'Pacifico',
        fontWeight: '200',
    },

    link: {
        color: 'black',
        fontSize: '14px',
        fontFamily: 'Arial',
        fontWeight: '700',
    },

    button: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '12px',
       '&:hover': {
          backgroundColor: '#252424',
          borderColor: '#252424',
       }
    },
    navButtonGroup: {
        marginLeft: '12px',
    },
    drawer: {
        width: drawerWidth,
    },
    lastNavItem: {
        marginTop: '24px',
    },
    container: {
        '&::before': {
            margin: '1px auto 1px 1px',
            content: "''",
            visibility: 'hidden',
            padding: '27px',
        },
    },
    logoContainer: {
        textAlign: 'center',
    }
}));


function Top(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid className={classes.container} container justify="center" alignItems="center" direction="row">
                        <Grid item className={classes.logoContainer}>
                            <Hidden mdUp>
                                <Typography variant="h6" className={classes.logo} noWrap>
                                    Vashon <br /> Motorworks
                                </Typography>
                            </Hidden>
                        </Grid>
                        <Grid item style={{marginLeft: 'auto'}}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Hidden mdDown implementation="css">
                                <nav>
                                    {/*<Grid container spacing={4} alignItems="center">
                                        <Grid item>
                                            <Link
                                                variant="body2"
                                                component="button"
                                                className={classes.link}
                                            >
                                                Navigation Link 1
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link
                                                variant="body2"
                                                component="button"
                                                className={classes.link}
                                            >
                                                Navigation Link 1
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link
                                                variant="body2"
                                                component="button"
                                                className={classes.link}
                                            >
                                                Navigation Link 1
                                            </Link>
                                        </Grid>
                                        <Grid item className={classes.navButtonGroup}>
                  <a href="https://app.acuityscheduling.com/schedule.php?owner=18602916" target="_blank" className={classNames(classes.button, "acuity-embed-button")}>Make Appointment</a><script src="https://embed.acuityscheduling.com/embed/bar/18602916.js" async></script>

                                        </Grid>
                                    </Grid>*/}
                                </nav>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
                <nav>
                    <Drawer
                        className={classes.drawer}
                        variant="temporary"
                        anchor="right"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={() => {
                            setMobileOpen(false);
                        }}
                        open={mobileOpen}
                    >
                        <List className={classes.list}>
                            {/*<ListItem button classes={{root: classes.drawerRoot }}>
                                <ListItemText primary="Navigation Link 1" />
                            </ListItem>
                            <ListItem button classes={{root: classes.drawerRoot }}>
                                <ListItemText primary="Navigation Link 2" />
                            </ListItem>
                            <ListItem button classes={{root: classes.drawerRoot }}>
                                <ListItemText primary="Navigation Link 3" />
                            </ListItem>*/}
                            <ListItem button className={classNames(classes.button, classes.lastNavItem)} classes={{root: classes.drawerRoot}}>
                                <ListItemText primary="Make Appointment" />
                            </ListItem>
                        </List>
                    </Drawer>
                </nav>
        </div>
    );
}

const Header = ({ siteTitle }) => (
    <>
        <Top />
    </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
