import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';

class HeaderApp extends Component {

  state = {
    fixed: false,
    info: [],
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const navbar = document.getElementById('idListened');
    const heightNavBar = navbar.offsetHeight;
    const offsetTop = navbar.offsetTop;
    this.setState({ heightNavBar, offsetTop });
    this.receiveArticle();
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

  receiveArticle = () => {
    const details = {
      method: 'GET',
      header: ('Content-Type: application/json'),
      mode: 'no-cors',
    };

    const adress = '/article';
    fetch(adress, details)
      .then(res => res.json())
      .then(res => this.setState({ info: res }))
      .catch(err => new Error(err));
    }

  render() {
    const { fixed, heightNavBar } = this.state;
    let fixedNavbar = fixed ? 'navbarFixed' : 'navbar';
    const imageSize = document.getElementById('idListenedImg');
    imageSize !== null ? console.log(imageSize.offsetHeight) : console.log('Not loaded');
    return (
      <Grid>
  
        {fixed && <div style={{ height: `${heightNavBar*4}px` }} />}
        <Grid id='idListened' container className={fixedNavbar} justify='center'>
          {this.state.info.map((el, i) => 
          
            <Button 
              component={Link}
              activeClass="active"
              to={el.nameProject}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
            >
              {el.nameProject}
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default HeaderApp;