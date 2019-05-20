import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Parallax } from "react-parallax";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Bonillio from '../asset/Bonillio.png';
import AtlasMap from '../asset/AtlasMap.png';
import CryptoTrader from '../asset/CryptoTrader.png';

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

const techno = {
  cryptotrader: ['React', 'JavaScript', 'Redux', 'Electron', 'CCXT', 'Semantic-UI'],
  altasMap: ['React', 'NodeJs', 'Express', 'Google Maps React', 'CSS'],
  bonillio: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
}

const image = {
  cryptotrader: CryptoTrader,
  altasMap: AtlasMap,
  bonillio: Bonillio,
}

function Accueil(props) {
  const { classes } = props;
  return (
    <div className='placeHolder'>

      <div style={{ height: '100px', background: 'black' }} />

      {/* <svg viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
        <polygon  points="0 0, 100 0, 0 15"/>
      </svg> */}

      <Parallax bgImage={image.cryptotrader} bgImageSizes='1000' strength={300}>
        <div className='parallaxImage' style={{ height: 700 }}>
          <div className='titleOverImage'>CryptoTrader</div>
        </div>
      </Parallax>

      <div style={{ height: '100px', background: 'black' }} />

      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="space-around"
        className='underImageAccueil'
      >
        <Grid item xs={4}>
          <h3 className='accueilTitle'> PRESENTATION DU PROJET </h3>
          <Button size='large' className={classes.button}> LIRE L'ARTICLE </Button>
        </Grid>
        <Grid item xs={4}>
          <h3 className='accueilTitle'> DESCRIPTION TECHNIQUE </h3>
          <Button size='large' className={classes.button}> LIRE L'ARTICLE </Button>
        </Grid>
        <Grid item xs={12}>
          {techno.cryptotrader.map((str, i) =>
            <Chip
              key={'ChipCryptoTrader' + i}
              avatar={<Avatar>{str[0]}</Avatar>}
              label={str}
              className={classes.chip}
            // color='secondary'
            />)}
        </Grid>
      </Grid>

      <div style={{ height: '20px' }} />
      {/* 
      <Parallax bgImage={image.altasMap} strength={300}>
        <div className='parallaxImage' style={{ height: 700 }}>
          <div className={classes.insideStyles}>Atlas Map</div>
        </div>
      </Parallax>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={7}>
          <h3 className={classes.title}> Pourquoi ce Projet ? </h3>
          <p className={classes.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita eius harum, iste accusamus asperiores
            dolore aperiam, ad fuga tenetur, culpa quasi eos quo? Sequi quae omnis quos ipsam magnam. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quam esse ea amet vero. Quod id, doloribus nulla dolores debitis, blanditiis
            consequuntur libero eligendi alias, perspiciatis veniam quasi cupiditate eaque temporibus. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quod, sed voluptatibus. Eos magni quod atque id autem dolores, et inventore
            molestias quam delectus repudiandae, praesentium voluptates? Natus, ullam. Architecto, tempora!
          </p>
          <h3 className={classes.title}> Les difficultées rencontré </h3>
          <p className={classes.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita eius harum, iste accusamus asperiores
            dolore aperiam, ad fuga tenetur, culpa quasi eos quo? Sequi quae omnis quos ipsam magnam. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quam esse ea amet vero. Quod id, doloribus nulla dolores debitis, blanditiis
            consequuntur libero eligendi alias, perspiciatis veniam quasi cupiditate eaque temporibus. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quod, sed voluptatibus. Eos magni quod atque id autem dolores, et inventore
            molestias quam delectus repudiandae, praesentium voluptates? Natus, ullam. Architecto, tempora!
          </p>
          {techno.altasMap.map((str, i) => 
          <Chip 
          key={'ChipAltasMap' + i}
          avatar={<Avatar>{str[0]}</Avatar>}
          label={str} 
          className={classes.chip}
          color='secondary'
          /> )}
        </Grid>
      </Grid>

      <div style={{height: '20px'}} />

      <Parallax bgImage={image.bonillio} strength={300}>
        <div className='parallaxImage' style={{ height: 700 }}>
          <div className={classes.insideStyles}>Bonillio</div>
        </div>
      </Parallax>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={7}>
          <h3 className={classes.title}> Pourquoi ce Projet ? </h3>
          <p className={classes.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita eius harum, iste accusamus asperiores
            dolore aperiam, ad fuga tenetur, culpa quasi eos quo? Sequi quae omnis quos ipsam magnam. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quam esse ea amet vero. Quod id, doloribus nulla dolores debitis, blanditiis
            consequuntur libero eligendi alias, perspiciatis veniam quasi cupiditate eaque temporibus. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quod, sed voluptatibus. Eos magni quod atque id autem dolores, et inventore
            molestias quam delectus repudiandae, praesentium voluptates? Natus, ullam. Architecto, tempora!
          </p>
          <h3 className={classes.title}> Les difficultées rencontré </h3>
          <p className={classes.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat expedita eius harum, iste accusamus asperiores
            dolore aperiam, ad fuga tenetur, culpa quasi eos quo? Sequi quae omnis quos ipsam magnam. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quam esse ea amet vero. Quod id, doloribus nulla dolores debitis, blanditiis
            consequuntur libero eligendi alias, perspiciatis veniam quasi cupiditate eaque temporibus. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quod, sed voluptatibus. Eos magni quod atque id autem dolores, et inventore
            molestias quam delectus repudiandae, praesentium voluptates? Natus, ullam. Architecto, tempora!
          </p>
          {techno.bonillio.map((str, i) => 
          <Chip 
          key={'ChipBonillio' + i}
          avatar={<Avatar>{str[0]}</Avatar>}
          label={str} 
          className={classes.chip}
          color='secondary'
          /> )}
        </Grid>
      </Grid>

      <div style={{height: '20px'}} />
       */}
    </div>
  )
};

Accueil.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Accueil);