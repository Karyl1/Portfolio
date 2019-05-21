import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class HeaderApp extends Component {

  state = {
    fixed: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const navbar = document.getElementById('idListened');
    const heightNavBar = navbar.offsetHeight;
    const offsetTop = navbar.offsetTop;
    this.setState({ heightNavBar, offsetTop });
  }

  handleScroll = (event) => {
    const { fixed, offsetTop } = this.state;
    const currentScrollTop = window.scrollY;

    window.addEventListener('resize', this.handleResize);
    if (currentScrollTop >= offsetTop && fixed === false) {
      this.setState({ fixed: true });
    } else if (currentScrollTop < offsetTop && fixed === true) {
      this.setState({ fixed: false })
    }
  }

  render() {
    const { fixed, heightNavBar } = this.state;
    const { pathname } = this.props.location;
    let fixedNavbar = fixed ? 'buttonGroupFixed' : 'buttonGroup';
    return (
      <Grid>
        <Grid className='logoHeader'>
          <img src='https://image.noelshack.com/fichiers/2019/21/2/1558447810-welcome.png' alt='welcome' />
        </Grid>
        {fixed ? <div style={{ height: `${heightNavBar}px` }} /> : ''}
        <Grid item xs={12}>
          <Grid id='idListened' container className={fixedNavbar} justify='center'>
            <Button
              style={{ paddingLeft: '2%', paddingRight: '2%' }}
              varient='contained'
              size='medium'
              className='buttonNavBar'
              onClick={() => this.props.history.push('/')}
            >
              
              <span style={ pathname === '/' ? {color: '#990101', fontWeight: 'bold'} : {color: 'black'}}>Accueil</span>
              
        </Button>
            <Button
              style={{ paddingLeft: '2%', paddingRight: '2%' }}
              varient='contained'
              size='medium'
              className='buttonNavBar'
              onClick={() => this.props.history.push('parcours')}
            >
              <span style={ pathname === '/parcours' ? {color: '#990101', fontWeight: 'bold'} : {color: 'black'}}>Parcours</span>
        </Button>
            <Button
              style={{ paddingLeft: '2%', paddingRight: '2%' }}
              varient='contained'
              size='medium'
              className='buttonNavBar'
              onClick={() => this.props.history.push('contact')}
            >
            <span style={ pathname === '/contact' ? {color: '#990101', fontWeight: 'bold'} : {color: 'black'}}>Contacter</span>
        </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

HeaderApp.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default HeaderApp;