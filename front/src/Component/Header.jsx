/* import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';

export default function HeaderApp() {

  const [ navbarPosition, setNavbarPosition ] = useState(false);
  const [ tabs, setTabs ] = useState([]);
  const [ heightNavBar, setHeightNavBar] = useState();
  const [ offsetTop, setOffsetTop ] = useState();

  useEffect(() => setupNavbar(), []);

  function setupNavbar() {
    window.addEventListener('scroll', handleScroll);
    const navbar = document.getElementById('idListened');
    const prevHeightNavBar = navbar.offsetHeight;
    const prevOffsetTop = navbar.offsetTop;

    setOffsetTop(prevOffsetTop);
    setHeightNavBar(prevHeightNavBar);
    receiveArticle();
  };

  function handleScroll(event) {
    const currentScrollTop = window.scrollY;
    // window.addEventListener('resize', handleResize());
    if (currentScrollTop >= offsetTop && navbarPosition === false) {
      setNavbarPosition(true);
    } else if (currentScrollTop < offsetTop && navbarPosition === true) {
      setNavbarPosition(false);
    }
  };
  

  function receiveArticle() {
    const details = {
      method: 'GET',
      header: ('Content-Type: application/json'),
      mode: 'no-cors',
    };

    const adress = '/article';
    fetch(adress, details)
      .then(res => res.json())
      .then(res =>setTabs(res))
      .catch(err => new Error(err));
    }

    // let fixedNavbar = navbarPosition ? 'navbarFixed' : 'navbar';
    let fixedNavbar = 'navbarFixed';
    const imageSize = document.getElementById('idListenedImg');
    imageSize !== null ? console.log('loaded') : console.log('Not loaded');
    return (
      <Grid>
  
        {navbarPosition && <div style={{ height: `${heightNavBar*4}px` }} />}
        <Grid id='idListened' container className={fixedNavbar} justify='center'>
          {tabs.map((el, i) => 
            <Link 
              key={'tabs'+i}
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
            </Link>
          )}
        </Grid>
      </Grid>
  );
} */

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';

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

    // window.addEventListener('resize', this.handleResize);
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
    return (
      <Grid>
        {fixed && <div style={{ height: `${heightNavBar}px` }} />}
        <Grid id='idListened' container justify='center'>

        <Navbar className={fixedNavbar} collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {this.state.info.map((el, i) =>
                <Nav.Link
                  key={'element'+i}
                  as={Link} 
                  to={el.nameProject}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={2000}
                  isDynamic={true}
                >
                  <span className='underline'>
                    <Button
                      className='navbarButton'
                    >
                     {el.nameProject}
                    </Button>
                  </span>
                </Nav.Link>
                )}
            </Nav>
        </Navbar.Collapse>
            <Nav>
              <Nav.Link 
                as={Link} 
                to='Contact'
                smooth={true}
                duration={2000}
              >
                <span className='underline'>
                  <Button
                    className='navbarButton'
                  >
                    Contact
                  </Button>
                </span>
              </Nav.Link>
            </Nav>
      </Navbar>

      </Grid>
      </Grid>
    );
  }
}

export default HeaderApp;