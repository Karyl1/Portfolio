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
  const { name_project, image_project, lien_pres_project, lien_github_project, techno_project, desc_project } = props.article;
  const { classes } = props;
  return (
    <div className='main'>
      <Element name={name_project} className='element'>

        <Grid container alignContent='center' className='containerBlack'>
        </Grid>

        <Parallax
          bgImage={image_project}
          bgImageSizes='1000'
          strength={300}
        >
          <div className='parallaxImage' style={{ height: 700 }}>
            <div className='titleOverImage'>{name_project}</div>
          </div>
        </Parallax>

        <Grid container alignItems='center' justify='center' className='containerBlack'>
          <h3 className='descProjectAccueil'>{desc_project.toUpperCase()}</h3>
        </Grid>

        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="space-around"
          className='underImageAccueil'
        >

          <Grid item md={4} xs={12}>
            <h3 className='accueilTitle'> PRESENTATION DU PROJET </h3>
            <Button
              size='large'
              className={classes.button}
              href={lien_pres_project}
            >
              LIRE L'ARTICLE
          </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <h3 className='accueilTitle'> GITHUB DU PROJET </h3>
            <Button
              size='large'
              className={classes.button}
              onClick={() => window.open(lien_github_project)}
            >
              ACCEDER AU DEPOT
            </Button>

          </Grid>
          <Grid item xs={12}>
            {JSON.parse(techno_project).map((str, i) =>
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