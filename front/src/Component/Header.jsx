import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  buttonGroup: {
    background: 'white',
    zIndex: 1,
    boxShadow: '1px 0px 10px black'
  },
  buttonGroupFixed: {
    background: 'white',
    zIndex: 1,
    position: 'fixed',
    top: '0',
    boxShadow: '1px 0px 10px black'
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
  }
});

class HeaderApp extends Component {

  state = {
    fixed: false,
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const navbar = document.getElementById('topScroll');
    const heightNavBar = navbar.offsetHeight;
    const offsetTop = navbar.offsetTop;
    this.setState({ heightNavBar, offsetTop })
  }

  handleScroll = (event) => {
    const { fixed, offsetTop } = this.state;
    const currentScrollTop = window.scrollY;

    if( currentScrollTop >= offsetTop && fixed === false) {
      this.setState({ fixed: true });
    } else if ( currentScrollTop < offsetTop && fixed === true ) {
      this.setState({ fixed: false })
    }
  }

  render(){
  const { classes } = this.props;
  const { fixed, heightNavBar } = this.state;
  return (
    <Grid>
      <Grid className={classes.image}>
        <img src='https://avatars3.githubusercontent.com/u/8874047?s=200&v=4' alt='Wild Code School Logo' />
      </Grid>
        {fixed ? <div style={{height: `${heightNavBar}px`}}/> : '' }
      <Grid item xs={12}>
        <Grid id='topScroll' container className={fixed ? classes.buttonGroupFixed : classes.buttonGroup } justify='center'>
          <Button varient='contained' size='large' className={classes.button}>
            Accueil
        </Button>
          <Button varient='contained' size='large' className={classes.button}>
            Parcours
        </Button>
          <Button varient='contained' size='large' className={classes.button}>
            Contacter
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}}

HeaderApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderApp);