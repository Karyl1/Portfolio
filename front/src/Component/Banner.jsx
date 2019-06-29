import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Banner() {
    return (
        <Grid className='logoHeader'>
            <a href='/'>
                <img src='https://image.noelshack.com/fichiers/2019/21/2/1558447810-welcome.png' alt='welcome' />
            </a>
        </Grid>
    );
}