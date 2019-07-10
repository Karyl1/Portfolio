import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Element } from 'react-scroll';
import styles from './MaterialConfig/MaterialConfig'

function Footer(props) {
    const { classes } = props;
    return (
        <Element name='Contact' className='element'>
            <hr className='hrFooter' />
                <div className='footerDiv'>
                    <Grid container justify='center'>
                        <p>Created by Karyl | 2019</p>
                    </Grid>
                    <Grid container item justify='center'>
                        <Button
                            variant="outlined"
                            className={classes.button} 
                            onClick={() => window.open('https://github.com/Karyl1')} 
                            style={{ marginLeft: '2%', marginRight: '2%' }}
                        >
                                Github
                        </Button>
                    </Grid>
            </div>
        </Element>
        );
}

export default withStyles(styles)(Footer); 