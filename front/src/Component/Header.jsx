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
                  to={el.name_project}
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
                     {el.name_project}
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