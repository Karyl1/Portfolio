import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from "react-parallax";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  chip: {
    margin: theme.spacing.unit - 5,
  },
  button: {
    border: '2px solid black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      transitionDuration: '.6s',
    },
  }
});

class Accueil extends Component {
  render() {
    const { nameProject, imageProject, lienPresProject, lienGithubProject, technoProject, descProject } = this.props.article;
    const { classes } = this.props;
    return (
      <div className='placeHolder'>

        <div style={{ height: '100px', background: 'black' }} />

        {/* <svg viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
        <polygon  points="0 0, 100 0, 0 15"/>
      </svg> */}

        <Parallax
          bgImage={imageProject}
          bgImageSizes='1000'
          strength={300}
        >
          <div className='parallaxImage' style={{ height: 700 }}>
            <div className='titleOverImage'>{nameProject}</div>
          </div>
        </Parallax>

        <Grid style={{ height: '100px', background: 'black' }}>
          <h3 className='descProjectAccueil'>{descProject.toUpperCase()}</h3>
        </Grid>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="space-around"
          className='underImageAccueil'
        >

          <Grid item xs={4}>
            <h3 className='accueilTitle'> PRESENTATION DU PROJET </h3>
            <Button
              size='large'
              className={classes.button}
              onClick={() => this.props.a.history.push(lienPresProject)}
            >
              LIRE L'ARTICLE
          </Button>
          </Grid>

          <Grid item xs={4}>
            <h3 className='accueilTitle'> GITHUB DU PROJET </h3>
            <Button
              size='large'
              className={classes.button}
              onClick={() => window.open(lienGithubProject)}
            >
              LIRE L'ARTICLE
            </Button>

          </Grid>
          <Grid item xs={12}>
            {technoProject.map((str, i) =>
              <Chip
                key={'ChipCryptoTrader' + i}
                avatar={<Avatar>{str[0]}</Avatar>}
                label={str}
                className={classes.chip}
              />)}
          </Grid>
        </Grid>
      </div>
    )
  }
};

Accueil.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Accueil);