import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from "react-parallax";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Element } from 'react-scroll';
import styles from './MaterialConfig/MaterialConfig'
// import Smartphone from '../asset/Logo/baseline-smartphone-24px.svg';


function Accueil(props) {
  const { nameProject, imageProject, lienPresProject, lienGithubProject, technoProject, descProject } = props.article;
  const { classes } = props;
  return (
    <div className='main'>
      <Element name={nameProject} className='element'>

        <Grid container alignContent='center' className='containerBlack'>
          {/* <Grid item>
          <img src={Smartphone} alt='smartphone' className='assetAccueil'/>
          </Grid> */}
        </Grid>

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

        <Grid container alignItems='center' justify='center' className='containerBlack'>
          <h3 className='descProjectAccueil'>{descProject.toUpperCase()}</h3>
        </Grid>

        <Grid
          container
          spacing={16}
          alignItems="center"
          justify="space-around"
          className='underImageAccueil'
        >

          <Grid item md={4} xs={12}>
            <h3 className='accueilTitle'> PRESENTATION DU PROJET </h3>
            <Button
              size='large'
              className={classes.button}
              href={lienPresProject}
            >
              LIRE L'ARTICLE
          </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <h3 className='accueilTitle'> GITHUB DU PROJET </h3>
            <Button
              size='large'
              className={classes.button}
              onClick={() => window.open(lienGithubProject)}
            >
              ACCEDER AU DEPOT
            </Button>

          </Grid>
          <Grid item xs={12}>
            {technoProject.map((str, i) =>
              <Chip
                key={`chipsTechno${i}`}
                avatar={<Avatar className='accueilAvatar'>{str[0]}</Avatar>}
                label={str}
                className={classes.chip}
              />)}
          </Grid>
        </Grid>
      </Element>
    </div>
  )
};

Accueil.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accueil);