import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Styles from './MaterialConfig/MaterialConfig';
import Grid from '@material-ui/core/Grid';

function PrivateGithub(props) {
    const { classes } = props;
    return (
        <div>
            <div className='articleHeaderImageBackground'>
                <h1 className='articleTitle'>CryptoTrader</h1>
            </div>
		    <hr className='hrArticle' />
            <h1 className='accueilTitle'>Désolé, ce Github est sous accord de confidentialité signé avec Trading du Coin Ltd.</h1>
            
            <Grid container justify='center'>
                <Button className={classes.button} href='/'>Retour à l'accueil</Button>
            </Grid>
        </div>
    );
}

export default withStyles(Styles)(PrivateGithub);