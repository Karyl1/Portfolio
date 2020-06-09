import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { withStyles } from '@material-ui/core/styles';
import styles from './MaterialConfig/MaterialConfig';
import back from './backend-service';
import { connect } from 'react-redux';


function Comment(props) {
    const { stars, content_comment, date_comment, email_user, first_name_user, last_name_user, id_comment, id_project, id_user, is_edited_comment, picture_user } = props.commentInfo;
    const { classes, callback, isConnected, userConnected } = props;
    
    const addLikeComment = () => {
        if(isConnected) {
            const id_user = userConnected.id_user;
            const url = '/add_like_comment';
            const body = JSON.stringify({id_user, id_comment});
            back.postRequest(url, body, callback)
            props.refreshComment();
        } else {
            console.error('Veuillez vous connecter')
        }
    }

    const updateComment = () => {
        if(isConnected) {
            const contentComment = prompt('', content_comment);
            console.log(content_comment)
            if(contentComment !== null && contentComment.length > 3) {
                const idUser = userConnected.id_user; // id de l'utilisateur
                const idComment = id_comment;
                const body = JSON.stringify({idUser, idComment, contentComment});
                const url = '/update_comment';
                back.updateRequest(url, body, callback);
                props.refreshComment();
            }
        }
    }

    const deleteComment = () => {
        const id_user = userConnected.id_user; // id de l'utilisateur
        //const id_comment = id_comment;
        const body = JSON.stringify({id_user, id_comment});
        const url = '/delete_comment';
        back.deleteRequest(url, body, callback);
        props.refreshComment();
    }
    
    const matchEdit = userConnected.id_user === id_user ? <Button onClick={() => updateComment()}> {('editer').toUpperCase()} </Button> : '';
    const matchDel = userConnected.id_user === id_user ? <IconButton size="small" onClick={() => deleteComment()}><HighlightOffIcon /></IconButton> : '';

    return (
        <div>
            <Grid container className={classes.comment}>
            <Grid item className={classes.avatarComment}>
                <Avatar src={picture_user} alt={`Avatar de ${first_name_user, last_name_user}`}/>
            </Grid>
                <Grid item xs={12} sm>
                    <Grid container direction='row' alignItems='center'>
                            <Typography> {first_name_user} {last_name_user} </Typography>
                            <Typography variant="body2" color="textSecondary" className={classes.dateComment}> {date_comment} {is_edited_comment ? '(modifié)' : ''}</Typography>
                            {matchDel}
                    </Grid>
                    <Grid item>
                        <Typography className={classes.contentComment}> {content_comment} </Typography>
                    </Grid>
                    <Grid container alignItems='center' direction='row'>
                        <IconButton size="small" onClick={() => addLikeComment()}>
                            <FavoriteIcon color='error' />
                        </IconButton>
                        <Typography style={{marginRight: '1rem'}}> {stars} </Typography>
                        {matchEdit}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = store => {
    const { userInfo, isConnected } = store.userInfo;
    return { userConnected: userInfo, isConnected };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Comment));