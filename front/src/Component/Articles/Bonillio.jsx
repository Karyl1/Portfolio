import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    mainTitle: {
        letterSpacing: '2px',
        paddingTop: '1%',
        paddingBottom: '1%',
        marginTop: '2%',
        marginBottom: '5%'
    },
    paragraph: {
        fontSize: '1.1rem',
        padding: '2%'
    }
  }));

export default function Bonillio() {
    const classes = useStyles();
    return (
        <Grid>
            <Typography variant='h3' align='center' className={`parallaxImage ${classes.mainTitle}`}>
                Bonillio
            </Typography>
            <Grid container direction='row' justify='center' alignItems='center' spacing={3}>
                <Grid item md={7} xs={11}>
                <Paper>
                    <Typography variant='h4' align='center' gutterBottom>
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography align='justify' className={classes.paragraph}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quisquam dignissimos soluta blanditiis aliquid in a, enim tempore
                     facilis laboriosam saepe consequuntur officia dicta numquam nesciunt quas corporis quae ullam.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id aspernatur nisi sapiente, molestias inventore 
                     dolorum! Illo enim, odio dolor assumenda laboriosam illum iste magni veritatis dolores eius. Quia, quod.
                    </Typography>
                </Paper>
                </Grid>
                <Grid item>
                    <img src='https://via.placeholder.com/400x300' alt='placeholder' />
                </Grid>
                <Grid container item xs={11}>
                    <Paper>
                        <Typography align='justify' className={classes.paragraph}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur odit eum corrupti officia perferendis. Inventore nesciunt dolorem repellat quod 
                            deleniti quisquam! Veritatis, ipsam possimus? Repudiandae ex beatae aliquam sed hic.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore beatae soluta quaerat officiis labore doloremque unde 
                            odit pariatur numquam voluptates dicta distinctio temporibus esse nobis, a illum magnam sequi culpa?
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}