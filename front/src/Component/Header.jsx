import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import backgroundHeader from '../asset/PinClipart.com_dover-clip-art-free_3358419.png';

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
  const { fixed, heightNavBar } = this.state;
  let fixedNavbar = 'buttonGroup'; 
  fixed ? fixedNavbar = 'buttonGroupFixed' : fixedNavbar = 'buttonGroup'
  return (
    <Grid>
      <Grid className='logoHeader'>
        <img src='http://arbreapivoines.com/wp-content/uploads/revslider/comingsoon/welcome.png' alt='welcome'/>
      </Grid>
        {fixed ? <div style={{height: `${heightNavBar}px`}}/> : '' }
      <Grid item xs={12}>
        <Grid id='topScroll' container className={fixedNavbar} justify='center'>
          <Button varient='contained' size='large' className='button'>
            Accueil
        </Button>
          <Button varient='contained' size='large' className='button'>
            Parcours
        </Button>
          <Button varient='contained' size='large' className='button'>
            Contacter
        </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}}

HeaderApp.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default HeaderApp;