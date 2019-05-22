import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

function Footer() {
    return (
        <div className='footerText'>
            <hr className='hrFooter' />
            <div style={{height: '60px'}} />
            <Grid container justify='center'>
                <p>Created by Karyl | 2019</p>
            </Grid>
            <Grid container item justify='center'>
                    <Button onClick={() => window.open('https://www.linkedin.com/in/marty-monvoisin/')} style={{ marginLeft: '2%', marginRight: '2%' }}>Linkedin</Button>
                    <Button onClick={() => window.open('https://github.com/Karyl1')} style={{ marginLeft: '2%', marginRight: '2%' }}>Github</Button>
            </Grid>
            <div style={{height: '60px'}} />
        </div>
    );
}

export default Footer;