import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/Styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Styles from '../MaterialConfig/MaterialConfig';
import Container from '@material-ui/core/Container';
import back from '../backend-service';
import Comment from '../Comment';
import GoogleOAuth from '../GoogleOAuth';
import { connect } from 'react-redux';

function RandoSmart(props) {
    const { classes, isConnected, userConnected } = props;
    const [commentList, setCommentList] = useState({});
    const [contentComment, setContentComment] = useState('');
    const [contentState, setContentState] = useState(false);
    // recupère la liste des commentaires
    useEffect(() => {getCommentList()}, []);
    const idProject = 1;

    const getCommentList = () => {
        const id_project = idProject;
        const url = `/get_comment?index=${id_project}`;
        
        back.getRequest(url, response);
    }

    const response = (response) => {
        if(response.status === 200) {
            if(response.data !== undefined)
                setCommentList(response.data.reverse());
            if(response.message !== undefined)
                console.log(response.message);
            }
        else
            console.error(response.data);
    }

    const addComment = (e) => {
        e.preventDefault();
        if(isConnected) {
            if( contentComment !== null && contentComment.length > 3) {
                const id_user = userConnected.id_user;
                const id_project = idProject;
                const content = contentComment;
                const body = JSON.stringify({id_user, content, id_project});
                const url = '/add_comment';
                setContentComment('');
                back.postRequest(url, body, response);
                getCommentList();
            } else {
                setContentState(true)
            }
        } else {
            alert('Vous n\'êtes pas connecté');
        }
    }

    const handleChange = e => {
        setContentComment(e.target.value);
        if (e.target.value.length > 3) {
            setContentState(false);
        }
    }

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
            
            <hr className='hrGrey'/>

            <Grid container style={{maxWidth: '85%', margin: 'auto'}}>
                <Grid item xs={3}>
                    <GoogleOAuth/>
                </Grid>
                <Grid item xs={6}>
                    <h1 className='articleComment'>Espace commentaire</h1>
                </Grid>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={12} >
                    <form onSubmit={addComment}>
                        <TextField fullWidth error={contentState} id="standard-basic" label="Ajouter un commentaire" onChange={handleChange} value={contentComment}/>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    {Object.values(commentList).map((el, i) => <Comment commentInfo={el} refreshComment={getCommentList} callback={response} key={'comment '+i}/>)}
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = store => {
    const { userInfo, isConnected } = store.userInfo;
    return { userConnected: userInfo, isConnected };
}

export default connect(mapStateToProps, null)(withStyles(Styles)(RandoSmart));