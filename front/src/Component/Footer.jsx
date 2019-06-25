import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Element } from 'react-scroll';

export default function Footer() {
return (
    <Element name='Contact' className='element'>
        <div className='footerText'>
            <hr className='hrFooter' />
            <div style={{height: '60px'}} />
                <Grid container justify='center'>
                    <p>Created by Karyl | 2019</p>
                </Grid>
                <Grid container item justify='center'>
                    <Button
                        variant="outlined"
                        className='footerButton' 
                        onClick={() => window.open('https://www.linkedin.com/in/marty-monvoisin/')} 
                        style={{ marginLeft: '2%', marginRight: '2%' }}
                    >
                        <span className='underline'>
                            Linkedin
                        </span>
                    </Button>

                    <Button
                        variant="outlined"
                        className='footerButton' 
                        onClick={() => window.open('https://github.com/Karyl1')} 
                        style={{ marginLeft: '2%', marginRight: '2%' }}
                    >
                        <span className='underline'>
                            Github
                        </span>
                    </Button>
                </Grid>
            <div style={{height: '60px'}} />
        </div>
    </Element>
    );
}