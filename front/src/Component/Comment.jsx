import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from './MaterialConfig/MaterialConfig';

function Comment(props) {
    const { stars, content_comment, date_comment, email_user, first_name_user, last_name_user, id_comment, id_project, id_user, is_edited_comment, picture_user } = props.userInfo;
    const { classes } = props;

    const clickedHeart = e => console.log(1);

    console.log(props)
    
    return (
        <div>
            <Grid className={classes.sizeComment}>
                <Grid
                container
                >
                <Grid item className={classes.avatarComment}>
                    <Avatar src={picture_user} alt={`Avatar de ${first_name_user, last_name_user}`}/>
                </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Grid container direction='row'>
                                <Typography style={{frontWeight: 'bold'}}> {first_name_user} {last_name_user} </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.dateComment}> {date_comment} {is_edited_comment ? '(modifié)' : ''}</Typography>
                            </Grid>
                                <Typography> {content_comment} </Typography>
                            <Grid container alignItems='center' direction='row'>
                                <IconButton size="small" onClick={() => clickedHeart()}>
                                    <FavoriteIcon color='error' />
                                </IconButton>
                                <Typography style={{marginRight: '1rem'}}> {stars} </Typography>
                                <Button> {('editer').toUpperCase()} </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Comment);