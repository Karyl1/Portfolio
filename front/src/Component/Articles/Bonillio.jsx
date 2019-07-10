import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
            <Container>
                <h1>Placeholder</h1>
                <img src='https://via.placeholder.com/250x250' alt='placeholder' className='articleFloatText'/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, excepturi consectetur. Optio dolore est nisi unde dolores, consectetur beatae harum excepturi debitis ut? Quos repellat sed, nulla nesciunt aspernatur a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum consequuntur voluptate minima, blanditiis eos aliquam ullam quam eum consectetur ex, eligendi aspernatur doloremque cumque ab. Eos natus doloribus unde! lrem
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere expedita optio animi reprehenderit nulla aliquam quaerat? Hic quam autem, at totam dignissimos asperiores excepturi veniam, in sequi ipsa architecto exercitationem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni totam fugiat nobis officia commodi numquam nemo impedit iste sit. Iste nobis ullam nam quisquam corporis? Temporibus itaque doloribus amet?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate soluta quo nulla aut mollitia cumque, repellendus maiores suscipit sint voluptatem magnam eos eligendi, eveniet fugiat neque natus sit, nihil quaerat?
                </p>
            </Container>
        </Grid>
    );
}