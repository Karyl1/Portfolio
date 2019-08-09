import React from 'react';
import { withStyles } from '@material-ui/core/Styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Styles from '../MaterialConfig/MaterialConfig';
import Container from '@material-ui/core/Container';

function RandoSmart(props) {
    const { classes } = props;
    return (
        <div>
            <div className='articleHeaderImageBackground'>
                <h1 className='articleTitle'>RandoSmart</h1>
            </div>
            <Grid className='articleGrid'>
                <Container maxWidth='lg' className='articleContainer'>
                    <img src='https://via.placeholder.com/250x250' alt='placeholder' className='articleImageFloatTextRight'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, excepturi consectetur. Optio dolore est nisi unde dolores, consectetur beatae harum excepturi debitis ut? Quos repellat sed, nulla nesciunt aspernatur a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum consequuntur voluptate minima, blanditiis eos aliquam ullam quam eum consectetur ex, eligendi aspernatur doloremque cumque ab. Eos natus doloribus unde! lrem
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere expedita optio animi reprehenderit nulla aliquam quaerat? Hic quam autem, at totam dignissimos asperiores excepturi veniam, in sequi ipsa architecto exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni totam fugiat nobis officia commodi numquam nemo impedit iste sit. Iste nobis ullam nam quisquam corporis? Temporibus itaque doloribus amet?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate soluta quo nulla aut mollitia cumque, repellendus maiores suscipit sint voluptatem magnam eos eligendi, eveniet fugiat neque natus sit, nihil quaerat?
                    </p>
                    <hr />
                    <img src='https://via.placeholder.com/1200x200' alt='placeholder' className='articleImageFluid'/>
                    <hr />
                    <img src='https://via.placeholder.com/250x250' alt='placeholder' className='articleImageFloatTextLeft'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, excepturi consectetur. Optio dolore est nisi unde dolores, consectetur beatae harum excepturi debitis ut? Quos repellat sed, nulla nesciunt aspernatur a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum consequuntur voluptate minima, blanditiis eos aliquam ullam quam eum consectetur ex, eligendi aspernatur doloremque cumque ab. Eos natus doloribus unde! lrem
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere expedita optio animi reprehenderit nulla aliquam quaerat? Hic quam autem, at totam dignissimos asperiores excepturi veniam, in sequi ipsa architecto exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni totam fugiat nobis officia commodi numquam nemo impedit iste sit. Iste nobis ullam nam quisquam corporis? Temporibus itaque doloribus amet?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate soluta quo nulla aut mollitia cumque, repellendus maiores suscipit sint voluptatem magnam eos eligendi, eveniet fugiat neque natus sit, nihil quaerat?
                    </p>
                    </Container>
                </Grid>
                
            <Grid container justify='center'>
                <Button className={classes.button} href='/'>Retour à l'accueil</Button>
            </Grid>
        </div>
    );
}

export default withStyles(Styles)(RandoSmart);